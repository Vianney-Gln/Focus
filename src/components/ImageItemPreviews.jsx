import React, { useContext } from "react";
import BackgroundContext from "../contexts/BackgroundContext";

function ImageItemPreviews({ source }) {
  const backgroundContext = useContext(BackgroundContext);
  return (
    <img
      onMouseOver={() => {
        backgroundContext.setBackground(source.replace("w500", "original"));
      }}
      onFocus={() => 0}
      src={source}
      alt="films"
    />
  );
}

export default ImageItemPreviews;
