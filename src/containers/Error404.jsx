// React
import React, { useEffect, useState } from "react";
// React router dom
import { Redirect, Link } from "react-router-dom";
// images
import gif from "../assets/images/compteur.gif";
// styles
import "../styles/error404.css";

const Error404 = () => {
  // gestion du titre du document
  document.title = "Error 404 | Focus";
  const [redirectTimer, setRedirectTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setRedirectTimer(redirectTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [redirectTimer]);

  return (
    <div className="containercompteur">
      {redirectTimer <= 0 && <Redirect to="/" />}
      <div className="container404">
        <h2>4</h2>
        <img src={gif} className="compteurgif404" alt="compteur" />
        <h2>4</h2>
      </div>
      <p>You are being redirected...</p>
      <Link to="/">
        <button type="button" className="buttonRedirectHome">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
};

export default Error404;
