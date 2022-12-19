import React from "react";
import ButtonAppBar from "./ButtonAppBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
        }}
      >
        <ButtonAppBar />
        <Login />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
