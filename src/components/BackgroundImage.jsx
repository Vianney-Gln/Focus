import React, { useContext } from "react";
import BackgroundContext from "../contexts/BackgroundContext";

function BackgroundImage() {
  const backgroundContext = useContext(BackgroundContext);

  return (
    backgroundContext.background && (
      <img
        className="background-image"
        src={backgroundContext.background.replace("original", "w1280")}
        alt="background"
      />
    )
  );
}

export default BackgroundImage;
