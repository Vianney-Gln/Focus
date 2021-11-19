// React
import React, { useContext } from "react";
// contexts
import { BackgroundContext } from "../contexts/BackgroundContext";
// styles
import "../styles/backgroundImage.css";

function BackgroundImage() {
  const backgroundContext = useContext(BackgroundContext);

  return (
    backgroundContext.background && (
      <img
        className="dinamic-background-image"
        src={backgroundContext.background.replace("original", "w1280")}
        alt="background"
      />
    )
  );
}

export default BackgroundImage;
