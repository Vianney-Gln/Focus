import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { Rating } from "react-simple-star-rating";
import { SignContext } from "../contexts/SignContext";
import { AuthContext } from "../contexts/AuthContext";
import { updateMovie } from "../services/FirebaseRealtimeDatabase";
import { ModalContext } from "../contexts/ModalContext";
// import Player from "./Player";

import "../styles/itemModal.css";

const ItemModal = () => {
  const signinContext = useContext(SignContext);
  const authContext = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const modalContext = useContext(ModalContext);
  Modal.setAppElement("#root");

  // récupération des icones plateformes
  let icones;
  if (modalContext.infosMovie.providers) {
    icones = modalContext.infosMovie.providers.map((icon) => (
      <img src={icon.img} alt={icon.providers} title={icon.providers} />
    ));
  }

  console.log(icones);

  const handleAddToMyList = async () => {
    try {
      if (authContext.isLogged) {
        // Ajouter a MaList
        await updateMovie(460458);
      } else {
        // Demander de se connecter
        signinContext.showSignIn();
      }
    } catch (error) {
      console.log(error);
    }
  };
  // si connecté, enregistrer le rating
  // sinon pas enregistrer
  const handleRating = (value) => {
    setRating(value);
  };
  // gestion du Player vidéo
  const [player, setPlayer] = useState(false);
  const handlePlayer = () => {
    setPlayer(!player);
  };
  /* <Player
  player={player}
  data={modalContext.getInfosMovie(id)}
  handlePlayer={handlePlayer}
/> */

  return (
    <div className="itemModal">
      <Modal
        portalClassName="itemModal"
        className="itemModal"
        overlayClassName="modalOverlay"
        isOpen={modalContext.modalIsOpen} // Modal Toggle Open/Closed importé depuis ModalContext
        onRequestClose={() => {
          modalContext.setModalIsOpen(false);
        }}
      >
        <main className="modalContent">
          <div className="top-thumbnail">
            <img src={modalContext.infosMovie.background} alt="" />
            <button type="button" className="openPlayer" onClick={handlePlayer}>
              Open player
            </button>

            <h1>{modalContext.infosMovie.title}</h1>
            <a
              href="#close"
              title="Close"
              className="close"
              onClick={modalContext.setModalIsOpenToFalse}
            >
              X
            </a>
          </div>
          <div className="bottom-infos">
            <div className="bottom-infos-grid">
              <div className="bottom-infos-grid-creators">
                {modalContext.infosMovie.author}
              </div>
              <div className="bottom-infos-grid-date">
                {modalContext.infosMovie.date &&
                  `${modalContext.infosMovie.date.year}`}
              </div>
              <div className="bottom-infos-grid-length">
                {modalContext.infosMovie.duration &&
                  `${modalContext.infosMovie.duration.hours}h ${modalContext.infosMovie.duration.minutes} min`}
              </div>
              <div className="bottom-infos-grid-starRater">
                <Rating onClick={handleRating} ratingValue={rating} />
              </div>
              <div className="bottom-infos-grid-availableOn">
                Available On <i className="fa fa-play-circle-o" />
              </div>
              <div className="bottom-infos-grid-addToMyList">
                <button
                  className="btn-addToMyList"
                  type="button"
                  onClick={handleAddToMyList}
                >
                  <i className="icon-plus" /> Add to my list
                </button>
              </div>
              <div className="bottom-infos-grid-platforms">{icones}</div>
              <div className="bottom-infos-grid-synopsis">
                {modalContext.infosMovie.synopsis}
              </div>
            </div>
          </div>
        </main>
      </Modal>
    </div>
  );
};

export default ItemModal;
