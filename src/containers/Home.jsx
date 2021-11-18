import React, { useEffect, useRef, useState, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Logo, LogoMobile, SearchBar, Suggestion } from "../components";
import "../styles/home.scss";
import { suggestionFetch } from "../services/TheMovieDbFunctions";
import { getListofMyList } from "../services/FirebaseRealtimeDatabase";
import BurgerContext from "../contexts/BurgerContext";
import { AuthContext } from "../contexts/AuthContext";
import { SignContext } from "../contexts/SignContext";
import UseOnScreen from "../hooks/UseOnScreen";

const Home = () => {
  /**
   * Contexts
   */
  const burgerContext = useContext(BurgerContext);
  const authContext = useContext(AuthContext);
  const signinContext = useContext(SignContext);

  // affiche le burger ou non en fonction de la taille de la fenêtre dès le chargement de la page

  if (window.matchMedia("(max-width:800px)").matches) {
    burgerContext.displayBurger();
  } else {
    burgerContext.hiddenBurger();
  }

  // fonction qui capte le redimensionnement de la fenetre et qui affiche ou non le burger
  window.onresize = () => {
    if (window.matchMedia("(max-width:800px)").matches) {
      burgerContext.displayBurger();
    } else {
      burgerContext.hiddenBurger();
    }
  };

  /**
   * Create Ref for each Section
   */
  const prehomeRef = useRef();
  const upcomingRef = useRef();
  const popularRef = useRef();
  const nowplayingRef = useRef();
  const footerRef = useRef();

  /**
   * Test visibility of element by 50%
   */
  const upcomingIsVisible = UseOnScreen(upcomingRef);
  const popularIsVisible = UseOnScreen(popularRef);
  const nowplayingIsVisible = UseOnScreen(nowplayingRef);

  let categoryLink = "";
  let currentCategory = "";
  if (upcomingIsVisible) {
    categoryLink = "/category/upcoming";
    currentCategory = "Upcoming";
  }
  if (popularIsVisible) {
    categoryLink = "/category/popular";
    currentCategory = "Popular";
  }
  if (nowplayingIsVisible) {
    categoryLink = "/category/nowplaying";
    currentCategory = "Now Playing";
  }

  /**
   * Scroll to the top of a Ref
   * @param {ref} scrollToRef Name of the Ref
   */
  const scrollToReference = (scrollToRef) =>
    scrollToRef.current.scrollIntoView();

  const { sug } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (sug != null) {
      if (sug.toLowerCase() === "upcoming") scrollToReference(upcomingRef);
      else if (sug.toLowerCase() === "popular") scrollToReference(popularRef);
      else if (sug.toLowerCase() === "nowplaying")
        scrollToReference(nowplayingRef);
      else history.push("/error404");
    }
  }, []);

  /**
   * States of fetch
   */
  const [suggestionLoaded, setSuggestionLoaded] = useState(false);
  const [suggestionDatas, setSuggestionDatas] = useState([]);
  const [suggestionUserMyList, setSuggestionUserMyList] = useState([]);
  const [upcomingTop, setUpcomingTop] = useState(null);
  /**
   * Fetch Part
   */
  useEffect(() => {
    (async () => {
      try {
        /**
         * Fetch Suggestions
         */
        const data = await suggestionFetch();
        // Change loaded false to true
        setSuggestionLoaded(true);
        // Fill array with data
        setSuggestionDatas([data.upcoming, data.popular, data.nowplaying]);
        // Fetch User MyList
        if (authContext.isLogged) {
          const userMyList = await getListofMyList(authContext.userID);
          setSuggestionUserMyList(userMyList);
        }
        setUpcomingTop(upcomingRef.current.offsetTop);
        return true;
      } catch (error) {
        return false;
      }
    })();
  }, []);

  return (
    <main className="Containerhome">
      {/* Fixed Header */}
      <header className="navBar">
        <div className="navFixe">
          <Logo scrollTo={() => scrollToReference(prehomeRef)} />
          <LogoMobile scrollTo={() => scrollToReference(prehomeRef)} />
          <SearchBar />
        </div>
        <div className="navunfixe">
          <div className="contbuttonmylist">
            <Link
              to={authContext.isLogged ? "/mylist" : "/"}
              className="buttonmylist"
              onClick={
                authContext.isLogged
                  ? burgerContext.displayBurger
                  : () => signinContext.showSignIn("/mylist")
              }
            >
              MY LIST
            </Link>
          </div>
          <div className="contButtonSignIn">
            {!authContext.isLogged && (
              <button
                type="button"
                className="btn-common btn-aperture"
                onClick={signinContext.showSignIn}
              >
                SIGN IN
              </button>
            )}
            {authContext.isLogged && (
              <button
                type="button"
                className="btn-common btn-aperture"
                onClick={authContext.userLogout}
              >
                LOGOUT
              </button>
            )}
          </div>
          {(upcomingIsVisible || popularIsVisible || nowplayingIsVisible) && (
            <div className="goto-category">
              <Link onClick={burgerContext.displayBurger} to={categoryLink}>
                <span>
                  {upcomingIsVisible && `More Upcoming →`}
                  {popularIsVisible && `More Popular →`}
                  {nowplayingIsVisible && `More Now PLaying →`}
                </span>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Right Fixed NavBar */}
      <div className="home-navigation">
        <Link to="/upcoming">
          <button
            className="btn-navigation"
            type="button"
            onClick={() => scrollToReference(upcomingRef)}
          >
            <p>Upcoming</p>
          </button>
        </Link>
        <Link to="/popular">
          <button
            className="btn-navigation"
            type="button"
            onClick={() => scrollToReference(popularRef)}
          >
            <p>Popular</p>
          </button>
        </Link>
        <Link to="/nowplaying">
          <button
            className="btn-navigation"
            type="button"
            onClick={() => scrollToReference(nowplayingRef)}
          >
            <p>Now Playing</p>
          </button>
        </Link>
        <button
          className="btn-navigation"
          type="button"
          onClick={() => scrollToReference(footerRef)}
        >
          <p>Menu</p>
        </button>
      </div>

      {/* Bottom Left Switch */}
      <div className="switchHome">
        <h2>{currentCategory}</h2>
      </div>

      {/* Pre-Home: Sized Image */}
      <section className="pre-home" ref={prehomeRef} />

      {/* Suggestion: Upcoming */}
      <section className="suggestion" ref={upcomingRef}>
        <Suggestion
          userMyList={suggestionUserMyList}
          data={suggestionDatas[0]}
          loaded={suggestionLoaded}
          type="upcoming"
          top={upcomingTop}
        />
      </section>

      {/* Suggestion: Popular */}
      <section className="suggestion" ref={popularRef}>
        <Suggestion
          userMyList={suggestionUserMyList}
          data={suggestionDatas[1]}
          loaded={suggestionLoaded}
          type="popular"
        />
      </section>

      {/* Suggestion: Now-Playing */}
      <section className="suggestion" ref={nowplayingRef}>
        <Suggestion
          userMyList={suggestionUserMyList}
          data={suggestionDatas[2]}
          loaded={suggestionLoaded}
          type="nowplaying"
        />
      </section>

      {/* Footer: Menu */}
      <section className="footer" ref={footerRef}>
        <ul className="footercategory">
          <Link onClick={burgerContext.displayBurger} to="/category/upcoming">
            <li className="footeritem">UPCOMING</li>
          </Link>
          <Link onClick={burgerContext.displayBurger} to="/category/popular">
            <li className="footeritem">POPULAR</li>
          </Link>
          <Link
            onClick={burgerContext.displayBurger}
            to="/category/now-playing"
          >
            <li className="footeritem">NOW PLAYING</li>
          </Link>
          <Link
            onClick={
              authContext.isLogged
                ? burgerContext.displayBurger
                : signinContext.showSignIn
            }
            to={authContext.isLogged ? "/mylist" : "/"}
            className="buttonmylist"
          >
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
