// React
import React, { useContext } from "react";
// react router dom
import { Link } from "react-router-dom";
// Contexts
import { BurgerContext } from "../contexts/BurgerContext";
// images
import logo from "../assets/images/focus_big.png";
// styles
import "../styles/logo.scss";

const Logo = ({ scrollTo }) => {
  const burgerContext = useContext(BurgerContext);

  const handleClickLogo = () => {
    burgerContext.hiddenBurger();
    if (scrollTo) scrollTo();
  };

  return (
    <div className="logonav">
      <Link onClick={handleClickLogo} to="/">
        <img src={logo} alt="Logotype" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
