import React, { useState } from "react";
import BackgroundContext from "../contexts/BackgroundContext";

function BackgroundProvider({ children }) {
  const [background, setBackground] = useState("");

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export default BackgroundProvider;
