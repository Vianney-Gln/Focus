import React from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import SwitchMtoS from "../components/Switch";
import Suggestion from "./Suggestion";
import "../styles/index.css";
import "../styles/home.scss";

const Home = () => (
  <div className="Containerhome">
    <div className="home">
      <header className="navBar">
        <div className="navFixe">
          <Logo />
          <SearchBar />
        </div>
        <div className="navunfixe">
          <div className="contbuttonmylist">
            <Link to="/mylist" className="buttonmylist">
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
      <div className="switchHome">
        <SwitchMtoS />
      </div>
    </div>
    <Suggestion />
    <div className="footer">
      <ul className="footercategory">
        <li className="footeritem">UPCOMING</li>
        <li className="footeritem">TOP RATED</li>
        <li className="footeritem">LATEST</li>
        <Link to="/mylist">
          <li className="footeritem">MY LIST</li>
        </Link>
        <Link to="/aboutus">
          <li className="footeritem">ABOUT US</li>
        </Link>
      </ul>
    </div>
  </div>
);

export default Home;
