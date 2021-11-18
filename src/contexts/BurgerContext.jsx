// react
import React, { createContext, useState } from "react";

export const BurgerContext = createContext(null);

// Ce composant établie les states et fonctions relatives à l'affichage du burger et sera envoyé au context

export default function BurgerProvider({ children }) {
  // states
  const [classBurger, setClassBurger] = useState("hamburger-not-displayed");
  const [displayPopupMenu, setDisplayPopupMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);
  // fonctions qui définissent la classe utilisée sur le burger
  function displayBurger() {
    setClassBurger("hamburger-displayed");
  }
  function hiddenBurger() {
    setClassBurger("hamburger-not-displayed");
  }

  return (
    <BurgerContext.Provider
      value={{
        classBurger,
        displayBurger,
        hiddenBurger,
        displayPopupMenu,
        setDisplayPopupMenu,
        isOpen,
        setOpen,
      }}
    >
      {/* children représente tous les composants qui seront enfants de BurgerProvider */}
      {children}
    </BurgerContext.Provider>
  );
}
