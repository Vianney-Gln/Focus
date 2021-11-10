import React from "react";
import { ItemsPreviews } from "../components";

import "../styles/index.css";
import "../styles/player.css";
import "../styles/itemsPreviews.css";

const Player = () => (
  <div className="player">
    <button className="button-back" type="button">
      <i className="fa fa-angle-left" />
    </button>
    <ItemsPreviews />
    <div className="platforms-list">
      <div className="platforms-item">platform logo1</div>
      <div className="platforms-item">platform logo2</div>
      <div className="platforms-item">platform logo3</div>
      <div className="platforms-item">platform logo4</div>
      <div className="platforms-item">platform logo5</div>
    </div>
  </div>
);

export default Player;
