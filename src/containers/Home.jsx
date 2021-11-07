import React, { useContext, useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import ImageItemPreviews from "../components/ImageItemPreviews";
import Logo from "../components/Logo";
import LogoMobile from "../components/LogoMobile";
import SearchBar from "../components/SearchBar";
import Switch from "../components/Switch";
import Suggestion from "./Suggestion";
import "../styles/home.scss";
import BurgerContext from "../contexts/BurgerContext";

import tempImage from "../assets/images/westworlded.jpg";
import useOnScreen from "../hooks/useOnScreen";

const Home = () => {
  // récupération du contexte
  // Achaque clique sur les links de cette page le burger s'affiche
  const burgerContext = useContext(BurgerContext);

  /**
   * Create Ref for each section
   */
  const suggestion1ref = useRef();
  const suggestion2ref = useRef();
  const suggestion3ref = useRef();
  const footerref = useRef();
  const prehomeref = useRef();

  /**
   * Scroll to the ref Element
   * @param {ref} scrollRef Name of ref
   */
  const executeScroll = (scrollRef) => {
    scrollRef.current.scrollIntoView();
  };

  /**
   * Mechanic for suggestion 1 image
   */
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const prehomeImg = document.querySelector(".pre-home img");
    const maxHeight = suggestion1ref.current.offsetTop;
    const percentWidth = 75 / 100;
    const percentOpacity = 60 / 100;
    const calcWidth = Math.round((scroll / maxHeight) * percentWidth * 100);
    const calcOpacity =
      Math.round((scroll / maxHeight) * percentOpacity * 100) / 100;

    prehomeImg.style.width = `${Math.min(25 + calcWidth, 100)}%`;
    prehomeImg.style.opacity = Math.max(1 - calcOpacity, 0.4);
  }, [scroll]);
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return () =>
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  /**
   * Test visibility of element
   */
  const suggestion1IsVisible = useOnScreen(suggestion1ref);
  const suggestion2IsVisible = useOnScreen(suggestion2ref);
  const suggestion3IsVisible = useOnScreen(suggestion3ref);

  /**
   * custom link to category changed by the 3rd section
   */
  let categoryLink = `/category`;
  if (suggestion1IsVisible) categoryLink = `/category/upcoming`;
  if (suggestion2IsVisible) categoryLink = `/category/popular`;
  if (suggestion3IsVisible) categoryLink = `/category/now-playing`;

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
            <Link
              to="/mylist"
              className="buttonmylist"
              onClick={burgerContext.displayBurger}
            >
              MY LIST
            </Link>
          </div>
          <div className="contButtonSignIn">
            <button type="button" className="btn-common btn-aperture">
              SIGN IN
            </button>
          </div>
          {(suggestion1IsVisible ||
            suggestion2IsVisible ||
            suggestion3IsVisible) && (
            <div className="goto-category">
              <Link onClick={burgerContext.displayBurger} to={categoryLink}>
                <span>
                  {suggestion1IsVisible && `More Upcoming →`}
                  {suggestion2IsVisible && `More Popular →`}
                  {suggestion3IsVisible && `More Now PLaying →`}
                </span>
              </Link>
            </div>
          )}
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
          className="btn-navigation"
          type="button"
          onClick={() => executeScroll(prehomeref)}
        >
          <p>Home</p>
        </button>
        <button
          className="btn-navigation"
          type="button"
          onClick={() => executeScroll(suggestion1ref)}
        >
          <p>Upcoming</p>
        </button>
        <button
          className="btn-navigation"
          type="button"
          onClick={() => executeScroll(suggestion2ref)}
        >
          <p>Popular</p>
        </button>
        <button
          className="btn-navigation"
          type="button"
          onClick={() => executeScroll(suggestion3ref)}
        >
          <p>Now Playing</p>
        </button>
        <button
          className="btn-navigation"
          type="button"
          onClick={() => executeScroll(footerref)}
        >
          <p>Menu</p>
        </button>
      </div>

      {/* Pre-Home */}
      <section className="pre-home" ref={prehomeref}>
        <ImageItemPreviews source={tempImage} />
      </section>

      {/* 3 Suggestion page */}
      <Suggestion refValue={suggestion1ref} />
      <Suggestion refValue={suggestion2ref} />
      <Suggestion refValue={suggestion3ref} />

      {/* Footer */}
      <section className="footer" ref={footerref}>
        <ul className="footercategory">
          <Link onClick={burgerContext.displayBurger} to="/category">
            <li className="footeritem">UPCOMING</li>
          </Link>
          <Link onClick={burgerContext.displayBurger} to="/category">
            <li className="footeritem">TOP RATED</li>
          </Link>
          <Link onClick={burgerContext.displayBurger} to="/category">
            <li className="footeritem">LATEST</li>
          </Link>
          <Link onClick={burgerContext.displayBurger} to="/mylist">
            <li className="footeritem">MY LIST</li>
          </Link>
          <Link onClick={burgerContext.displayBurger} to="/aboutus">
            <li className="footeritem">ABOUT US</li>
          </Link>
        </ul>
      </section>
    </main>
  );
};

export default Home;
