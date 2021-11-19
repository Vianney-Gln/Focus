// React
import React, { useContext } from "react";
// images
import defaultImg from "../assets/images/imgDefault.png";
// components
import ImageItemPreviews from "./ImageItemPreviews";
// contexts
import { ModalContext } from "../contexts/ModalContext";
// styles
import "../styles/itemsPreviews.css";

function ItemsPreviews({ data, id }) {
  const modalContext = useContext(ModalContext);
  return (
    <div
      /* le modal apparait au clique sur la vignette et son contenu se met à jour en fonction de l'id du film */
      onClick={() => {
        modalContext.getInfosMovie(id);
        modalContext.setModalIsOpenToTrue();
      }}
      role="presentation"
      className="preview-items"
    >
      <div className="container-image">
        <ImageItemPreviews source={data.image ? data.image : defaultImg} />
      </div>
      <span className="title">{data.title}</span>
    </div>
  );
}

export default ItemsPreviews;
