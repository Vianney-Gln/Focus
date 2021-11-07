import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/focus_big.png";
// import "../styles/logo.css";
import "../styles/logo.scss";

const Logo = () => (
  <div className="logonav">
    <Link to="/">
      <img src={logo} alt="Logotype" className="logo" />
    </Link>
  </div>
);

export default Logo;
