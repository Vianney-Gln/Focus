import React from "react";

import "../styles/index.css";
import "../styles/player.css";
import "../styles/itemsPreviews.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player = ({ data, player, handlePlayer }) => {
  console.log(data.trailer);

  return (
    <div className={player ? "player-open" : "player-close"}>
      <div className="container-btn-close">
        <button type="button" className="btn-close" onClick={handlePlayer}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="container-trailer">
        <iframe
          className="Trailer"
          src={data.trailer.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Player;
