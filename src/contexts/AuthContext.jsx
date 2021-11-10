import React, { useState } from "react";
import { logoutUser } from "../services/FirebaseUserFunctions";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const userLogout = async () => {
    const bool = await logoutUser();
    if (bool) {
      setIsLogged(false);
      setUserID(null);
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
