import React, { useContext } from "react";

import "../styles/index.css";
import "../styles/player.css";
import "../styles/itemsPreviews.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import trailer from "../assets/images/inception.mp4";
import PlayerContext from "../contexts/PlayerContext";

const Player = () => {
  const playerContext = useContext(PlayerContext);
  return (
    <div className={playerContext.player ? "player-open" : "player-close"}>
      <div className="container-btn-close">
        <button
          type="button"
          className="btn-close"
          onClick={playerContext.handlePlayer}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="container-trailer">
        <video className="Trailer" autoPlay="false">
          <source src={trailer} type="video/mp4" />
          <track kind="captions" />
        </video>
      </div>
    </div>
  );
};

export default Player;
