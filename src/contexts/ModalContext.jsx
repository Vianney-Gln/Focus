import React, { createContext, useState } from "react";

const ModalContext = createContext(null);

function ModalProvider({ children }) {
  // Modal Toggle Open/Closed
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        setModalIsOpenToFalse,
        setModalIsOpenToTrue,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
