import React, { useState } from "react";
import "../styles/elementListe.css";
import Rate from "rc-rate";
import movie from "../Data";
import "../../node_modules/rc-rate/assets/index.css";

function ElementList() {
  const [check, setCheck] = useState(false);

  /* fonction qui inverse l'état de check, au click */
  function handleCheck() {
    setCheck(!check);
  }

  /* fonction qui convertie le nombre de minutes en heures + minutes */
  const hours = (nbrMinutes) => {
    const nbrHours = (nbrMinutes / 60).toFixed(0);
    const minutes = (nbrMinutes % 60).toFixed(0);
    return `${nbrHours}h${minutes}`;
  };

  return (
    <div className="container-element-list">
      <div className="element-list">
        <div className="image-movie">
          <img
            src={`${"http://image.tmdb.org/t/p/w300"}${movie.backdrop_path}`}
            alt="film"
          />
        </div>
        <div className="infos-movie">
          <div className="title-movie">
            {/* retourne les différentes infos depuis le fichier Data.jsx en dynamique */}
            <h2>{movie.title.toUpperCase()}</h2>
          </div>
          <p className="creator">Creator/cast</p>
          <p className="date-release">{movie.release_date}</p>
          <p className="runtime">{`${hours(movie.runtime)}`}</p>
          <p>
            <Rate />
          </p>
        </div>
        <div
          onClick={handleCheck}
          onKeyDown={handleCheck}
          className="checkbox"
          role="button"
          tabIndex="0"
        >
          <p>
            {/* si le state check est true alors la case sera cochée */}
            <span>{check && <i className="fa fa-check" />}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ElementList;
