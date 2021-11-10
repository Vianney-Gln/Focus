import React, { createContext, useState } from "react";

const SignInContext = createContext(null);

const SignInProvider = ({ children }) => {
  const [classShowSignIn, setClassShowSignIn] = useState("");
  const [signInIsOpen, setSignInIsOpen] = useState(false);

  const showSignIn = () => {
    setClassShowSignIn("showSignIn");
    setSignInIsOpen(true);
  };
  const hideSignIn = () => {
    setClassShowSignIn("");
    setSignInIsOpen(false);
  };

  return (
    <SignInContext.Provider
      value={{
        classShowSignIn,
        signInIsOpen,
        showSignIn,
        hideSignIn,
      }}
    >
      {children}
    </SignInContext.Provider>
  );
};

export { SignInContext, SignInProvider };
