import React, { useRef } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import ImageItemPreviews from "../components/ImageItemPreviews";
import Logo from "../components/Logo";
import LogoMobile from "../components/LogoMobile";
import SearchBar from "../components/SearchBar";
import Switch from "../components/Switch";
import Suggestion from "./Suggestion";
import "../styles/home.scss";

import tempImage from "../assets/images/westworlded.jpg";

const Home = () => {
  const suggestion1ref = useRef();
  const suggestion2ref = useRef();
  const suggestion3ref = useRef();
  const executeScroll = (scrollRef) => scrollRef.current.scrollIntoView();
  return (
    <main className="Containerhome">
      {/* Top Menu */}
      <header className="navBar">
        <div className="navFixe">
          <Logo />
          <LogoMobile />
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

      {/* Switch Button */}
      <div className="switchHome">
        <Switch />
      </div>

      {/* Right Menu */}
      <div className="home-navigation">
        <button
          className="btn-navigation upcoming"
          type="button"
          onClick={() => executeScroll(suggestion1ref)}
        >
          <p>Upcomming</p>
        </button>
        <button
          className="btn-navigation popular"
          type="button"
          onClick={() => executeScroll(suggestion2ref)}
        >
          <p>Popular</p>
        </button>
        <button
          className="btn-navigation nowplaying"
          type="button"
          onClick={() => executeScroll(suggestion3ref)}
        >
          <p>Now Playing</p>
        </button>
      </div>

      {/* Pre-Home */}
      <section className="pre-home">
        <ImageItemPreviews source={tempImage} />
      </section>

      {/* 3 Suggestion page */}
      <Suggestion refValue={suggestion1ref} />
      <Suggestion refValue={suggestion2ref} />
      <Suggestion refValue={suggestion3ref} />

      {/* Footer */}
      <section className="footer">
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
          <Link to="/mylist">
            <li className="footeritem">MY LIST</li>
          </Link>
          <Link to="/aboutus">
            <li className="footeritem">ABOUT US</li>
          </Link>
        </ul>
      </section>
    </main>
  );
};

export default Home;
