import React, { createContext, useState } from "react";

export const BackgroundContext = createContext(null);

export default function BackgroundProvider({ children }) {
  const [background, setBackground] = useState("");

  return (
    <BackgroundContext.Provider value={{ background, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
}
