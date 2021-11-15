import React, { createContext, useState } from "react";

const SignContext = createContext(null);

const SignProvider = ({ children }) => {
  const [classShowSignIn, setClassShowSignIn] = useState("");
  const [signInIsOpen, setSignInIsOpen] = useState(false);
  const [classShowSignUp, setClassShowSignUp] = useState("");
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);

  const showSignIn = () => {
    setClassShowSignIn("showSignIn");
    setSignInIsOpen(true);
  };
  const hideSignIn = () => {
    setClassShowSignIn("");
    setSignInIsOpen(false);
  };
  const showSignUp = () => {
    setClassShowSignUp("showSignUp");
    setSignUpIsOpen(true);
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
      }}
    >
      {children}
    </SignContext.Provider>
  );
};

export { SignContext, SignProvider };
