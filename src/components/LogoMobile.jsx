import React from "react";
import { Link } from "react-router-dom";
import logoMobile from "../assets/images/Focus_logo_short.png";

function LogoMobile() {
  return (
    <div className="logonav-mobile">
      <Link to="/">
        <img src={logoMobile} alt="logo" />
      </Link>
    </div>
  );
}

export default LogoMobile;
