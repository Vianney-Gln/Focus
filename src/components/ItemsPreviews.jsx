import React, { useState } from "react";
import "../styles/itemsPreviews.css";

function ItemsPreviews() {
  const [display, setDisplay] = useState(false);

  function displayTitle() {
    setDisplay(!display);
  }

  return (
    <div className="preview-items">
      <img
        onMouseOver={displayTitle}
        onMouseLeave={displayTitle}
        onFocus={0}
        src="http://image.tmdb.org/t/p/w300/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
        alt="films"
      />
      {display && <span className="title">title</span>}
      <span className="title-for-mobile">title</span>
    </div>
  );
}

export default ItemsPreviews;
