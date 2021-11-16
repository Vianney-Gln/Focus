import React, { useContext } from "react";

import "../styles/index.css";
import "../styles/player.css";
import "../styles/itemsPreviews.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import trailer from "../assets/images/inception.mp4";
import PlayerContext from "../contexts/PlayerContext";

const Player = ({ data }) => {
  const playerContext = useContext(PlayerContext);
  console.log(data.trailer);

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
