import React, { useState } from "react";
import Modal from "react-modal";
import { Rating } from "react-simple-star-rating";
// import { ItemsPreviews } from "../components";
import westworlded from "../assets/images/westworlded.jpg";
import "../styles/itemModal.css";

const ItemModal = () => {
  // si connecté, enregistrer le rating
  // sinon pas enregistrer
  const [rating, setRating] = useState(0);
  const handleRating = (value) => {
    setRating(value);
  };
  // Modal Toggle Open/Closed
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="itemModal">
      <button type="button" onClick={setModalIsOpenToTrue}>
        Open Modal
      </button>
      <Modal
        portalClassName="itemModal"
        className="itemModal"
        overlayClassName="modalOverlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <main className="modalContent">
          <div className="top-thumbnail">
            <img src={westworlded} alt="" />
            <h1>westworld</h1>
            <a
              href="#close"
              title="Close"
              className="close"
              onClick={setModalIsOpenToFalse}
            >
              X
            </a>
          </div>
          <div className="bottom-infos">
            <div className="bottom-infos-grid">
              <div className="bottom-infos-grid-creators">
                Lisa Joy & Jonathan Nolan
              </div>
              <div className="bottom-infos-grid-date">2016</div>
              <div className="bottom-infos-grid-length">3 Seasons</div>
              <div className="bottom-infos-grid-starRater">
                <Rating onClick={handleRating} ratingValue={rating} />
              </div>
              <div className="bottom-infos-grid-availableOn">
                Available On <i className="fa fa-play-circle-o" />
              </div>
              <div className="bottom-infos-grid-addToMyList">
                <i className="fa fa-plus" />
                <span>Add to my list</span>
              </div>
              <div className="bottom-infos-grid-platforms" />
              <div className="bottom-infos-grid-synopsis">
                In the 2050s, Delos Inc. operates several theme parks, including
                the American-Old-West-themed Westworld. Each environment is
                populated by hosts. Indistinguishable from humans, these
                androids are programmed to fulfill the guests every desire. They
                will engage in—and be the objects of—every kind of violent
                and/or sexual activity, but their programming makes it
                impossible for them to allow the guests to be harmed. The
                Operators create narratives for these hosts to repeat each day
                while interacting with guests, but they wipe their memories each
                cycle. Delos Inc. party line is that the android hosts, being
                machines, can not be harmed by these scenarios the same way that
                a human would be.{" "}
              </div>
            </div>
          </div>
        </main>
      </Modal>
    </div>
  );
};

export default ItemModal;
