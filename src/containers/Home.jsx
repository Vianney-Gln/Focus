import React, { useContext, useEffect, useRef, useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import {
  ImageItemPreviews,
  Logo,
  LogoMobile,
  SearchBar,
  Switch,
} from "../components";
import Suggestion from "./Suggestion";
import "../styles/home.scss";
import BurgerContext from "../contexts/BurgerContext";

// import tempImage from "../assets/images/westworlded.jpg";
import useOnScreen from "../hooks/useOnScreen";
import { SignContext } from "../contexts/SignContext";
import { AuthContext } from "../contexts/AuthContext";
import { suggestionFetch } from "../services/TheMovieDbFunctions";

const Home = () => {
  // récupération du contexte
  // Achaque clique sur les links de cette page le burger s'affiche
  const burgerContext = useContext(BurgerContext);
  const signinContext = useContext(SignContext);
  const authContext = useContext(AuthContext);

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
   * Test visibility of element by 50%
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
  /* Fetch La data des films */
  /* State de la catégorie upcoming */
  // const [upcoming, setUpcoming] = React.useState([]);
  // const [popular, setPopular] = React.useState([]);
  // const [nowPlaying, setNowPlaying] = React.useState([]);

  /* TEST */
  const [suggestionList, setSuggestionList] = useState([]);

  const [backgroundSuggestion, setBackgroundSuggestion] = useState([]);

  const setCategorySuggestion = (source, category) => {
    console.log(source, category);
    const currentBackground = backgroundSuggestion;
    if (category === "upcoming") {
      currentBackground[0] = source;
    } else if (category === "popular") {
      currentBackground[1] = source;
    } else if (category === "nowplaying") {
      currentBackground[2] = source;
    }
    setBackgroundSuggestion(currentBackground);
  };

  React.useEffect(() => {
    const run = async () => {
      /* Récupère la data à partir de la function suggestionFetch movie */
      const data = await suggestionFetch();
      console.log(data);
      setBackgroundSuggestion([
        data.upcoming[1].background,
        data.popular[1].background,
        data.nowplaying[1].background,
      ]);
      /* console.log(data); */
      /* Récupère la data de la catégorie upcoming */
      // const mapUpcomming = data.upcoming.map((dataupcoming) => (
      //   <Suggestion key={dataupcoming.id} data={dataupcoming} />
      // ));

      setSuggestionList([
        <Suggestion
          data={data.upcoming}
          current={1}
          refValue={suggestion1ref}
          setBackgroundSuggestion={(background) => {
            setCategorySuggestion(background, "upcoming");
          }}
        />,
        <Suggestion
          data={data.popular}
          current={1}
          refValue={suggestion2ref}
          setBackgroundSuggestion={(background) => {
            setCategorySuggestion(background, "popular");
          }}
        />,
        <Suggestion
          data={data.nowplaying}
          current={1}
          refValue={suggestion3ref}
          setBackgroundSuggestion={(background) => {
            setCategorySuggestion(background, "nowplaying");
          }}
        />,
      ]);

      /* Récupère la data de la catégorie popular */
      // const mapPopular = data.popular.map((datapopular) => (
      //   <Suggestion key={datapopular.id} data={datapopular} />
      // ));

      /* Récupère la data de la catégorie nowplaying */
      // const mapNowPlaying = data.nowplaying.map((datanowplaying) => (
      //   <Suggestion key={datanowplaying.id} data={datanowplaying} />
      // ));
      // setUpcoming(mapUpcomming[0]);
      // setPopular(mapPopular[0]);
      // setNowPlaying(mapNowPlaying[0]);
    };
    run();
  }, []);
  return (
    <main className="Containerhome">
      {/* Top Menu */}
      <header className="navBar">
        <div className="navFixe">
          <Logo scrollTo={() => executeScroll(prehomeref)} />
          <LogoMobile scrollTo={() => executeScroll(prehomeref)} />
          <SearchBar />
        </div>
        <div className="navunfixe">
          <div className="contbuttonmylist">
            {/* IF logged redirect to mylist, else show login with no redirect */}
            <Link
              to={authContext.isLogged ? "/mylist" : "/"}
              className="buttonmylist"
              onClick={
                authContext.isLogged
                  ? burgerContext.displayBurger
                  : signinContext.showSignIn
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
      <section className="pre-home" ref={prehomeref}>
        {!suggestion2IsVisible && !suggestion3IsVisible && (
          <ImageItemPreviews source={backgroundSuggestion[0]} />
        )}
        {suggestion2IsVisible && (
          <ImageItemPreviews source={backgroundSuggestion[1]} />
        )}

        {suggestion3IsVisible && (
          <ImageItemPreviews source={backgroundSuggestion[2]} />
        )}
      </section>
      {suggestionList.length < 3 && (
        <>
          <section className="suggestion" ref={suggestion1ref}>
            <h1>Suggestion 1</h1>
          </section>
          <section className="suggestion" ref={suggestion2ref}>
            <h1>Suggestion 2</h1>
          </section>
          <section className="suggestion" ref={suggestion3ref}>
            <h1>Suggestion 3</h1>
          </section>
        </>
      )}
      {suggestionList.length === 3 && suggestionList}

      {/* <Suggestion refValue={suggestion1ref} /> */}
      {/* <Suggestion refValue={suggestion2ref} /> */}
      {/* <Suggestion refValue={suggestion3ref} /> */}

      {/* Footer */}
      <section className="footer" ref={footerref}>
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
            to={authContext.isLogged ? "/mylist" : "/"}
            className="buttonmylist"
            onClick={
              authContext.isLogged
                ? burgerContext.displayBurger
                : signinContext.showSignIn
            }
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
