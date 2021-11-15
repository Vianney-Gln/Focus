import React, { createContext, useState } from "react";
import { tmdbMovieInfos } from "../services/TheMovieDbFunctions";

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

  // fonction qui appelle toutes les infos du film en fonction de l'id récupéré
  const [infosMovie, setInfosMovie] = useState({});
  async function getInfosMovie(id) {
    const result = await tmdbMovieInfos(id);
    setInfosMovie(result);
  }

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        setModalIsOpen,
        setModalIsOpenToFalse,
        setModalIsOpenToTrue,
        getInfosMovie,
        infosMovie,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
