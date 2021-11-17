import "../styles/itemsPreviews.css";
import React, { useContext } from "react";
import ImageItemPreviews from "./ImageItemPreviews";
import { ModalContext } from "../contexts/ModalContext";

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
        <ImageItemPreviews source={data.image} />
      </div>
      <span className="title">
        {/* {data.title.length > 18
          ? `${data.title.substring(0, 12)}...`
          : data.title} */}
        {data.title}
      </span>
    </div>
  );
}

export default ItemsPreviews;
