import React from "react";
import imgNet from "../assets/images/netflix.png";
import imgCanal from "../assets/images/canal.png";

const AvailableOn = () => (
  <div className="availableon">
    <h4>Available On</h4>
    <h4 className="pictostream">▶︎</h4>
    <div>
      <img src={imgNet} alt="logonetflix" className="iconestream" />
      <img src={imgCanal} alt="logonetflix" className="iconestream" />
    </div>
  </div>
);

export default AvailableOn;
