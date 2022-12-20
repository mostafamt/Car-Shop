import { Button, Snackbar, Stack, TextField, Alert } from "@mui/material";

import React from "react";

import { SERVER_URL } from "../constants";
import AuthContext from "../context/AuthContext";
import Carlist from "./Carlist";
import Warning from "./Warning";

const Login = () => {
  const [user, setUser] = React.useState({
    username: "user",
    password: "user",
  });
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const { isAuthenticated, setAuth } = React.useContext(AuthContext);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const login = () => {
    fetch(SERVER_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        const jwtToken = res.headers.get("Authorization");
        if (jwtToken !== null) {
          sessionStorage.setItem("jwt", jwtToken);
          setAuth(true);
        } else {
          setOpenSnackbar(true);
        }
      })
      .catch((err) => console.log(err));
  };

  if (isAuthenticated) {
    return <Carlist />;
  } else {
    return (
      <div style={{ flexGrow: 1 }}>
        {/* <Warning /> */}
        <Stack
          spacing={2}
          height="70vh"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            name="username"
            label="Username"
            onChange={handleChange}
            defaultValue="user"
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            onChange={handleChange}
            defaultValue="user"
          />
          <Button variant="outlined" onClick={login}>
            Login
          </Button>
        </Stack>
        <Snackbar
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
          autoHideDuration={10000}
          message="Login failed: Check your username and password"
        />
      </div>
    );
  }
};

export default Login;
