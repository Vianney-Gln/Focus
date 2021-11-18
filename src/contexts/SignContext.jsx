// react
import React, { createContext, useState } from "react";

const SignContext = createContext(null);

const SignProvider = ({ children }) => {
  const [classShowSignIn, setClassShowSignIn] = useState("");
  const [signInIsOpen, setSignInIsOpen] = useState(false);
  const [classShowSignUp, setClassShowSignUp] = useState("");
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);
  const [redirect, setRedirect] = useState(null);

  const showSignIn = (path = null) => {
    setClassShowSignIn("showSignIn");
    setSignInIsOpen(true);
    if (path !== null) {
      setRedirect(path);
    }
  };
  const hideSignIn = () => {
    setClassShowSignIn("");
    setSignInIsOpen(false);
  };
  const showSignUp = (path = null) => {
    setClassShowSignUp("showSignUp");
    setSignUpIsOpen(true);
    if (path !== null) {
      setRedirect(path);
    }
  };
  const hideSignUp = () => {
    setClassShowSignUp("");
    setSignUpIsOpen(false);
  };

  return (
    <SignContext.Provider
      value={{
        classShowSignIn,
        signInIsOpen,
        showSignIn,
        hideSignIn,
        classShowSignUp,
        signUpIsOpen,
        showSignUp,
        hideSignUp,
        redirect,
        setRedirect,
      }}
    >
      {children}
    </SignContext.Provider>
  );
};

export { SignContext, SignProvider };
