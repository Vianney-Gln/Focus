import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BurgerContext from "../contexts/BurgerContext";
import logo from "../assets/images/focus_big.png";
// import "../styles/logo.css";
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
