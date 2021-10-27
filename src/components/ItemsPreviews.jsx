import React from "react";
import "../styles/itemsPreviews.css";

function ItemsPreviews() {
  return (
    <div className="preview-items">
      <img
        src="http://image.tmdb.org/t/p/w300/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
        alt="films"
      />
      <span>title</span>
    </div>
  );
}

export default ItemsPreviews;
