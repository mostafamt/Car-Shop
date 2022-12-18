import React from "react";

import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import { default as MUIDialog } from "@mui/material/Dialog";
import { DialogActions, DialogContent, Stack, TextField } from "@mui/material";

const Dialog = ({ open, onClose, formik }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <MUIDialog onClose={handleClose} open={open}>
      <DialogTitle>New Car</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent sx={{ pt: 0 }}>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              autoFocus
              name="brand"
              label="Brand"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.brand}
              size="small"
            />
            <TextField
              name="model"
              label="Model"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.model}
              size="small"
            />
            <TextField
              name="color"
              label="Color"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.color}
              size="small"
            />
            <TextField
              type="number"
              min="1996"
              name="productionYear"
              label="Year"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.productionYear}
              size="small"
            />
            <TextField
              type="number"
              name="price"
              label="Price"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.price}
              size="small"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </MUIDialog>
  );
};

export default Dialog;
