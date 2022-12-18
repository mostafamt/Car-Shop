import React from "react";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

import { SERVER_URL } from "../constants";
import { Box, IconButton, Snackbar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import AddCar from "./AddCar";
import EditCar from "./EditCar";

const fixedColumns = [
  { field: "brand", headerName: "Brand", width: 200 },
  { field: "model", headerName: "Model", width: 200 },
  { field: "color", headerName: "Color", width: 200 },
  { field: "productionYear", headerName: "Year", width: 150 },
  { field: "price", headerName: "Price", width: 150 },
];

const CustomToolbar = () => {
  return (
    <GridToolbarContainer className="gridClasses.toolbarContainer">
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const Carlist = () => {
  const [cars, setCars] = React.useState([]);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  React.useEffect(() => {
    fetchCars();
  }, []);

  const columns = [
    ...fixedColumns,
    {
      field: "_link.car.href",
      headerName: "",
      sortable: false,
      filterable: false,
      renderCell: (row) => (
        <>
          <EditCar data={row} updateCar={updateCar} />
        </>
      ),
    },
    {
      field: "_link.self.href",
      headerName: "",
      sortable: false,
      filterable: false,
      renderCell: (row) => (
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => deleteCar(row.id)}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const fetchCars = () => {
    const token = sessionStorage.getItem("jwt");
    fetch(`${SERVER_URL}/api/cars`, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCars(data._embedded.cars);
      })
      .catch((err) => console.log(err));
  };

  const addCar = (car) => {
    const token = sessionStorage.getItem("jwt");
    fetch(SERVER_URL + "/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(car),
    })
      .then((response) => {
        if (response.ok) {
          fetchCars();
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  };

  const updateCar = (car, url) => {
    const token = sessionStorage.getItem("jwt");
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(car),
    })
      .then((response) => {
        if (response.ok) {
          fetchCars();
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteCar = (url) => {
    const token = sessionStorage.getItem("jwt");
    if (window.confirm("Are you sure to delete ?")) {
      fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (response.ok) {
            fetchCars();
            setOpenSnackbar(true);
          } else {
            alert("Something went wrong!");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AddCar addCar={addCar} />
      </Box>
      <Box sx={{ height: "30rem", width: "95%", m: 4 }}>
        <DataGrid
          rows={cars}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row._links.self.href}
          components={{ Toolbar: CustomToolbar }}
        />
      </Box>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={2000}
        message="Car deleted sucessfully"
      />
    </div>
  );
};

export default Carlist;
