import "../styles/itemsPreviews.css";
import React from "react";
import ImageItemPreviews from "./ImageItemPreviews";

function ItemsPreviews({ data }) {
  return (
    <div className="preview-items">
      <div className="container-image">
        <ImageItemPreviews source={data.image} />
      </div>
      <span className="title">{data.title}</span>
    </div>
  );
}

export default ItemsPreviews;
