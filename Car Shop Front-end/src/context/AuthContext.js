import React from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isAuthenticated, setAuth] = React.useState(false);

  const logout = () => {
    sessionStorage.removeItem("jwt");
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
