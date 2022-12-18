import React from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import Dialog from "./Dialog";

const AddCar = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      brand: "",
      model: "",
      color: "",
      productionYear: "",
      price: "",
    },
    onSubmit: (values) => {
      props.addCar(values);
      handleClose();
      formik.handleReset();
    },
  });

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        startIcon={<AddIcon />}
      >
        New Car
      </Button>
      <Dialog open={open} onClose={handleClose} formik={formik} />
    </div>
  );
};

export default AddCar;
