import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/focus_big.png";
import "../styles/logo.css";

const Logo = () => (
  <div className="logonav">
    <Link to="/">
      <img src={logo} alt="Logotype" className="Logo" />
    </Link>
  </div>
);

export default Logo;
