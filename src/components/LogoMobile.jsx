import React from "react";
import { Route } from "react-router";
import logoMobile from "../assets/images/Focus_logo_short.png";

function LogoMobile() {
  return (
    <div className="logonav-mobile">
      <Route to="/">
        <img src={logoMobile} alt="logo" />
      </Route>
    </div>
  );
}

export default LogoMobile;
