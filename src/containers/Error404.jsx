import React from "react";
import gif from "../assets/images/compteur.gif";
import "../styles/error404.css";

const Error404 = () => (
  <div className="containercompteur">
    <div className="container404">
      <h2>4</h2>
      <img src={gif} className="compteurgif404" alt="compteur" />
      <h2>4</h2>
    </div>
    <p>You are being redirected...</p>
    <button type="button" className="buttonRedirectHome">
      BACK TO HOME
    </button>
  </div>
);

export default Error404;
