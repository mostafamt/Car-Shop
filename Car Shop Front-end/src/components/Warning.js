import { Alert, Box, Collapse, IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Warning = () => {
  const [openWarningAlert, setOpenWarningAlert] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  return (
    <Box
      sx={{
        // position: "absolute",
        // left: "1rem",
        // top: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1rem 2rem",
      }}
    >
      <Collapse in={openWarningAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenWarningAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
        >
          Please note that this project is't commercial. It's not worth to
          register a custom domain and somethings like that.
          <br />
          So, please enable mixed content to run it smoothly, Do you know how ?
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.youtube.com/watch?v=8O-mkCXoLb0"
            target={"_blank"}
            rel="noreferrer"
          >
            Enable mixed content
          </a>
        </Alert>
      </Collapse>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="success"
          sx={{
            mt: 1,
          }}
        >
          Also, please note that you're provided with a username and a password
          for just testing.
        </Alert>
      </Collapse>
    </Box>
  );
};

export default Warning;
