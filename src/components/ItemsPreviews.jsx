import "../styles/itemsPreviews.css";
import React from "react";

function ItemsPreviews() {
  return (
    <div className="preview-items">
      <div className="container-image">
        <img
          src="http://image.tmdb.org/t/p/w300/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
          alt="films"
        />
      </div>
      <span className="title">title</span>
    </div>
  );
}

export default ItemsPreviews;
