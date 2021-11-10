import React, { useContext } from "react";
import BackgroundContext from "../contexts/BackgroundContext";

function BackgroundImage() {
  const background = useContext(BackgroundContext);

  return (
    background && (
      <img className="background-image" src={background} alt="background" />
    )
  );
}

export default BackgroundImage;
