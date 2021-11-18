// react
import React, { useState, createContext } from "react";
// services
import { logoutUser } from "../services/FirebaseUserFunctions";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(localStorage.getItem("user") || null);
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("logged") || false
  );
  const userLogout = async () => {
    const bool = await logoutUser();
    if (bool) {
      setIsLogged(false);
      setUserID(null);
      localStorage.removeItem("user");
      localStorage.removeItem("logged");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userID,
        isLogged,
        setUserID,
        setIsLogged,
        userLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
