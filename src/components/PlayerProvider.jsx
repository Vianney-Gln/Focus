import React, { useState } from "react";
import PlayerContext from "../contexts/PlayerContext";

// Ce composant établie les states et fonctions relatives à l'affichage du player et sera envoyé au context

function PlayerProvider({ children }) {
  // states
  const [player, setPlayer] = useState(false);

  // fonctions qui définissent la classe utilisée sur le burger

  const handlePlayer = () => {
    setPlayer(!player);
  };
  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer,
        handlePlayer,
      }}
    >
      {/* children représente tous les composants qui seront enfants de BurgerProvider */}
      {children}
    </PlayerContext.Provider>
  );
}

export default PlayerProvider;
