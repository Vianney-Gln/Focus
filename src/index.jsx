import React from "react";

import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import BurgerProvider from "./components/BurgerProvider";
import App from "./App";
import "./assets/fonts/grotesk/Grotesk.css";
import "./assets/fonts/focus/focus.css";
import BackgroundProvider from "./components/BackgroundProvider";

/* Temporary */
import { SignProvider } from "./contexts/SignContext";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <BackgroundProvider>
      <AuthProvider>
        <SignProvider>
          <BurgerProvider>
            <Router>
              <App />
            </Router>
          </BurgerProvider>
        </SignProvider>
      </AuthProvider>
    </BackgroundProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
