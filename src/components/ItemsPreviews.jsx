import "../styles/itemsPreviews.css";
import React from "react";
import ImageItemPreviews from "./ImageItemPreviews";

function ItemsPreviews({ data }) {
  return (
    <div className="preview-items">
      <div className="container-image">
        <ImageItemPreviews source={data.image} />
      </div>
      <span className="title">
        {data.title.length > 18
          ? `${data.title.substring(0, 12)}...`
          : data.title}
      </span>
    </div>
  );
}

export default ItemsPreviews;
