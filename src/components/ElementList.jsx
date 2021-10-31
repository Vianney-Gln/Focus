import React from "react";
import "../styles/elementListe.css";

function ElementList() {
  return (
    <div className="element-list">
      <div className="image-movie">
        <img
          src="http://image.tmdb.org/t/p/w300/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
          alt="film"
        />
      </div>
      <div className="infos-movie">
        <div className="title-movie">
          <h2>Tilte</h2>
        </div>
        <p>Creator/cast</p>
        <p>date</p>
        <p>length</p>
        <p>stars ****</p>
      </div>
      <div className="checkbox">
        <p />
      </div>
    </div>
  );
}

export default ElementList;
