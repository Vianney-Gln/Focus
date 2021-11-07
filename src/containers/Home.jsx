import React, { useContext } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import LogoMobile from "../components/LogoMobile";
import SearchBar from "../components/SearchBar";
import Switch from "../components/Switch";
import Suggestion from "./Suggestion";
import BurgerContext from "../contexts/BurgerContext";
import "../styles/index.css";
import "../styles/home.scss";

const Home = () => {
  const burgerContext = useContext(BurgerContext);
  return (
    <div className="Containerhome">
      <header className="navBar">
        <div className="navFixe">
          <Logo />
          <LogoMobile />
          <SearchBar />
        </div>
        <div className="navunfixe">
          <div className="contbuttonmylist">
            <Link
              onClick={burgerContext.displayBurger}
              to="/mylist"
              className="buttonmylist"
            >
              MY LIST
            </Link>
          </div>
          <div className="contButtonSignIn">
            <button type="button" className="btn-common btn-aperture">
              SIGN IN
            </button>
          </div>
        </div>
        <div className="fakeBurger">
          <Hamburger />
        </div>
      </header>
      <div className="switchHome">
        <Switch />
      </div>
      <div className="home">
        <div className="mainHome">
          <ul className="navhome">
            <li>
              <a className="itemnavhome" href="@">
                UPCOMING
              </a>
            </li>
            <li>
              <a className="itemnavhome" href="@">
                TOP RATED
              </a>
            </li>
            <li>
              <a className="itemnavhome" href="@">
                LATEST
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <div className="footer">
        <ul className="footercategory">
          <Link to="/category">
            <li className="footeritem">UPCOMING</li>
          </Link>
          <Link to="/category">
            <li className="footeritem">TOP RATED</li>
          </Link>
          <Link to="/category">
            <li className="footeritem">LATEST</li>
          </Link>
          <Link onClick={burgerContext.displayBurger} to="/mylist">
            <li className="footeritem">MY LIST</li>
          </Link>
          <Link onClick={burgerContext.displayBurger} to="/aboutus">
            <li className="footeritem">ABOUT US</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Home;
