import "../styles/itemsPreviews.css";
import React from "react";
import ImageItemPreviews from "./ImageItemPreviews";

function ItemsPreviews() {
  return (
    <div className="preview-items">
      <div className="container-image">
        <ImageItemPreviews />
      </div>
      <span className="title">title</span>
    </div>
  );
}

export default ItemsPreviews;
