import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ButtonAppBar />
      <Login />
    </AuthProvider>
  );
}

export default App;
