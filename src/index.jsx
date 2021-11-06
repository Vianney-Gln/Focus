import React from "react";

import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import BurgerProvider from "./components/BurgerProvider";
import App from "./App";
import "./assets/fonts/grotesk/Grotesk.css";
import "./assets/fonts/focus/focus.css";

ReactDOM.render(
  <React.StrictMode>
    <BurgerProvider>
      <Router>
        <App />
      </Router>
    </BurgerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
