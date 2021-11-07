import React, { useState } from "react";
import BurgerContext from "../contexts/BurgerContext";

// Ce composant établie les states et fonctions relatives à l'affichage du burger et sera envoyé au context

function BurgerProvider({ children }) {
  // state
  const [classBurger, setClassBurger] = useState("hamburger-not-displayed");
  const [displayPopupMenu, setDisplayPopupMenu] = useState(false);
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
      }}
    >
      {/* children représente tous les composants qui seront enfants de BurgerProvider */}
      {children}
    </BurgerContext.Provider>
  );
}

export default BurgerProvider;
