import React from "react";

import { useFormik } from "formik";
import Dialog from "./Dialog";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditCar = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      brand: props.data.row.brand,
      model: props.data.row.model,
      color: props.data.row.color,
      productionYear: props.data.row.productionYear,
      price: props.data.row.price,
    },
    onSubmit: (values) => {
      props.updateCar(values, props.data.id);
      handleClose();
    },
  });

  return (
    <div>
      <div>
        <IconButton
          aria-label="update"
          color="primary"
          onClick={() => setOpen(true)}
        >
          <EditIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose} formik={formik} />
      </div>
    </div>
  );
};

export default EditCar;
