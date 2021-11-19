// React
import React, { useContext } from "react";
// React router dom
import { Link } from "react-router-dom";
// images
import logoMobile from "../assets/images/Focus_logo_short.png";
// contexts
import { BurgerContext } from "../contexts/BurgerContext";

function LogoMobile() {
  const burgerContext = useContext(BurgerContext);
  return (
    <div className="logonav-mobile">
      <Link onClick={burgerContext.displayBurger} to="/">
        <img src={logoMobile} alt="logo" />
      </Link>
    </div>
  );
}

export default LogoMobile;
