import React from "react";

import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import BurgerProvider from "./components/BurgerProvider";
import App from "./App";
import "./assets/fonts/grotesk/Grotesk.css";
import "./assets/fonts/focus/focus.css";

/* Temporary */
import { SignProvider } from "./contexts/SignContext";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SignProvider>
        <BurgerProvider>
          <Router>
            <App />
          </Router>
        </BurgerProvider>
      </SignProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
