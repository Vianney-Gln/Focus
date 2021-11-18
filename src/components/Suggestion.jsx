import React, { useState, useContext, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import "../styles/suggestion.scss";
import Player from "../containers/Player";
import ImageItemPreviews from "./ImageItemPreviews";
import { SignContext } from "../contexts/SignContext";
import { AuthContext } from "../contexts/AuthContext";
import {
  addMovie,
  updateMovie,
  addMovieToMyList,
  removeFromMyList,
  updateUserMyList,
  getMovieListByID,
  getMovieofMyList,
} from "../services/FirebaseRealtimeDatabase";
import defaultImg from "../assets/images/imgDefault.png";

const Suggestion = ({ data, loaded = false, userMyList = null, type, top }) => {
  /**
   * Contexts
   */
  const signinContext = useContext(SignContext);
  const authContext = useContext(AuthContext);

  /**
   * States
   */
  const [fullLoaded, setFullLoaded] = useState(false);
  const [currentData, setCurrentData] = useState(1);
  const [rating, setRating] = useState(0);
  const [buttonType, setButtonType] = useState(null);
  const [thisMovie, setThisMovie] = useState(null);
  const suggestionData = data ? data[currentData] : null;

  /**
   * Format userMyList to get only the ID of movie
   */
  const userMovieMyListID =
    userMyList !== null ? userMyList.map((movie) => movie.id) : [];

  useEffect(() => {
    if (loaded && suggestionData && authContext.isLogged && userMyList) {
      const checkthisMovie = userMyList.find(
        (movie) => movie.id === suggestionData.id
      );
      setThisMovie(checkthisMovie);
      if (checkthisMovie && checkthisMovie.user && checkthisMovie.user.rating) {
        setRating(checkthisMovie.user.rating);
      } else {
        setRating(0);
      }
    }
  }, [loaded, suggestionData]);

  /**
   * Change the button text
   * @param {boolean} bool If add or remove but in Boolean
   */
  const buttonMyList = (bool) => {
    // Si ajouté
    if (bool) {
      setButtonType(
        <>
          <i className="icon-plus" /> Add to my list
        </>
      );
    } else {
      setButtonType(
        <>
          <i className="icon-cancel" /> Remove
          <br />
          from my list
        </>
      );
    }
  };

  /**
   * Add the movie to user list if connected
   */
  const handleAddToMyList = async () => {
    try {
      // Ajouter a MaList
      if (authContext.isLogged) {
        // Get if this movie already exit in db
        const movieAlreadyExist = await getMovieListByID(suggestionData.id);
        // If Not exist
        if (!movieAlreadyExist) {
          // try to add this movie to the database
          const movieData = {
            title: suggestionData.title || "Not documented",
            poster: suggestionData.background || defaultImg,
            author: suggestionData.author || "Not documented",
            date: suggestionData.date.base || "Not documented",
            duration: suggestionData.duration.base || "Not documented",
          };
          await addMovie(suggestionData.id, movieData);
        }
        // If Exist
        else {
          // try to update this movie to the database
          const movieData = {
            title: suggestionData.title || "Not documented",
            poster: suggestionData.background || defaultImg,
            author: suggestionData.author || "Not documented",
            date: suggestionData.date.base || "Not documented",
            duration: suggestionData.duration.base || "Not documented",
          };
          await updateMovie(suggestionData.id, movieData);
        }
        // get if user already rated this movie
        const movieInfo = await getMovieofMyList(
          authContext.userID,
          suggestionData.id
        );
        let ratingDefault = null;
        if (movieInfo && movieInfo.user && movieInfo.user.rating)
          ratingDefault = movieInfo.user.rating;
        // update to add user on movie
        await addMovieToMyList(
          authContext.userID,
          suggestionData.id,
          ratingDefault
        );
        // Change button to "Remove from my list"
        buttonMyList(false);
      }
      if (authContext.isLogged) {
        // try to add this movie to the database
        const movieData = {
          title: suggestionData.title || "Not documented",
          poster: suggestionData.background || defaultImg,
          author: suggestionData.author || "Not documented",
          date: suggestionData.date.base || "Not documented",
          duration: suggestionData.duration.base || "Not documented",
        };
        await addMovie(suggestionData.id, movieData);
        // update to add user on movie
        await addMovieToMyList(authContext.userID, suggestionData.id);
        // Change button to "Remove from my list"
        buttonMyList(false);
      } else {
        // Demander de se connecter
        signinContext.showSignIn();
      }
    } catch (error) {
      return false;
    }
  };

  /**
   * Remove the movie from the user list if connected
   */
  const handleRemoveOfMyList = async () => {
    try {
      // Remove movie from MaList
      if (authContext.isLogged) {
        await removeFromMyList(authContext.userID, suggestionData.id);
        // Change button to "Add to my list"
        buttonMyList(true);
      } else {
        // Demander de se connecter
        signinContext.showSignIn();
      }
    } catch (error) {
      return false;
    }
  };

  /**
   * Handle the rating of a movie but save only if connected
   * @param {number} value Rating number /5
   * @param {number} movieID Movie ID
   * @returns Because eslint will not work without this
   */
  const handleRating = (value, movieID) => {
    setRating(value);
    // si connecter enregistrer le rating
    if (authContext.isLogged) {
      // Connected
      updateUserMyList(authContext.userID, movieID, {
        rating: value,
      });
    }
    return true;
  };

  const handleChangeSlideshow = (num) => {
    let newCurrent = currentData + num;
    if (newCurrent < 0) newCurrent = 2;
    if (newCurrent > 2) newCurrent = 0;
    setCurrentData(newCurrent);
  };

  const [player, setPlayer] = useState(false);
  const handlePlayer = () => {
    setPlayer(!player);
  };

  /**
   * Mechanic for suggestion 1 image
   */
  const [scroll, setScroll] = useState(window.scrollY);
  useEffect(() => {
    if (!loaded) return;
    if (!suggestionData) return;
    const prehomeImg = document.querySelector(".sizedImage img");
    const maxHeight = top || window.innerHeight;
    const percentWidth = 75 / 100;
    const percentOpacity = 60 / 100;
    const calcWidth = Math.round((scroll / maxHeight) * percentWidth * 100);
    const calcOpacity =
      Math.round((scroll / maxHeight) * percentOpacity * 100) / 100;

    prehomeImg.style.opacity = Math.max(1 - calcOpacity, 0.4);
    const styleWidth = 25 + calcWidth;

    if (styleWidth <= 100) {
      prehomeImg.style.width = `${Math.min(styleWidth, 100)}%`;
      prehomeImg.style.position = "fixed";
      prehomeImg.style.top = "50%";
      prehomeImg.style.left = "50%";
      prehomeImg.style.transform = "translate(-50%, -50%)";
      prehomeImg.style.height = "auto";
    } else {
      prehomeImg.style.position = "absolute";
      prehomeImg.style.width = "100%";
      prehomeImg.style.height = "100%";
      prehomeImg.style.top = "auto";
      prehomeImg.style.left = "auto";
      prehomeImg.style.transform = "none";
    }
  }, [scroll, loaded, suggestionData]);
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return () =>
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  return (
    <>
      {loaded && suggestionData && suggestionData.trailer && (
        <Player
          player={player}
          data={suggestionData}
          handlePlayer={handlePlayer}
        />
      )}
      {["popular", "nowplaying"].includes(type) && loaded && suggestionData && (
        <ImageItemPreviews
          source={
            suggestionData.background.replace("original", "w1280")
              ? suggestionData.background.replace("original", "w1280")
              : defaultImg
          }
        />
      )}
      {["upcoming"].includes(type) && loaded && suggestionData && (
        <div className="sizedImage">
          <ImageItemPreviews
            source={
              suggestionData.background.replace("original", "w1280")
                ? suggestionData.background.replace("original", "w1280")
                : defaultImg
            }
          />
        </div>
      )}
      <div className="suggestion-body">
        {/* Left Container: Slideshow */}
        <div className="containers-slideshow">
          <div className="slideshow">
            <button
              type="button"
              className="btn-fleche-slideShow"
              onClick={() => handleChangeSlideshow(-1)}
            >
              <i className="icon-left-open-big" />
            </button>
            <div className="container-image-player">
              <img
                className="img-slideshow"
                src={
                  loaded && suggestionData
                    ? suggestionData.background.replace("original", "w500")
                    : defaultImg
                }
                alt="slideimg"
                onLoad={() => setFullLoaded(true)}
                style={fullLoaded ? {} : { display: "none" }}
              />
              {!fullLoaded && <div className="loadingInfos" />}
              <button
                type="button"
                className="btn-fleche-slideShow"
                onClick={handlePlayer}
              >
                <i className="icon-play" />
              </button>
            </div>
            <button
              type="button"
              className="btn-fleche-slideShow"
              onClick={() => handleChangeSlideshow(1)}
            >
              <i className="icon-right-open-big" />
            </button>
          </div>
        </div>

        {/* Right Container: Informations */}
        <div className="suggestion-informations">
          <h1>
            {loaded && suggestionData && suggestionData.title}
            {!loaded && <div className="loadingInfos" />}
          </h1>
          <div className="movie-informations">
            <div className="movie-author">
              {loaded && suggestionData && suggestionData.author}
              {!loaded && <div className="loadingInfos" />}
            </div>
            <div className="movie-year">
              {loaded && suggestionData && suggestionData.date.base}
              {!loaded && <div className="loadingInfos" />}
            </div>
            <div className="movie-duration">
              {loaded &&
                suggestionData &&
                suggestionData.duration &&
                `${suggestionData.duration.hours}h ${suggestionData.duration.minutes}`}
              {!loaded && <div className="loadingInfos" />}
            </div>
          </div>
          <div className="movie-synopsis">
            {loaded && suggestionData && suggestionData.synopsis}
            {!loaded && <div className="loadingInfos" />}
          </div>
          <div className="movie-mores">
            <div className="movie-rating">
              {loaded && suggestionData && (
                <Rating
                  onClick={(value) => handleRating(value, suggestionData.id)}
                  ratingValue={rating}
                />
              )}
              {!loaded && <Rating ratingValue={0} />}
            </div>
            {loaded &&
              suggestionData &&
              userMovieMyListID.includes(suggestionData.id) && (
                <button
                  className="movie-addtomylist"
                  type="button"
                  onClick={handleRemoveOfMyList}
                >
                  {buttonType !== null && buttonType}
                  {buttonType === null &&
                    thisMovie &&
                    Object.prototype.hasOwnProperty.call(
                      thisMovie.user,
                      "watch"
                    ) && (
                      <>
                        <i className="icon-cancel" /> Remove
                        <br />
                        from my list
                      </>
                    )}
                  {buttonType === null &&
                    thisMovie &&
                    !Object.prototype.hasOwnProperty.call(
                      thisMovie.user,
                      "watch"
                    ) && (
                      <>
                        <i className="icon-plus" /> Add to my list
                      </>
                    )}
                </button>
              )}
            {loaded &&
              suggestionData &&
              !userMovieMyListID.includes(suggestionData.id) && (
                <button
                  className="movie-addtomylist"
                  type="button"
                  onClick={handleAddToMyList}
                >
                  {buttonType !== null && buttonType}
                  {buttonType === null && (
                    <>
                      <i className="icon-plus" /> Add to my list
                    </>
                  )}
                </button>
              )}
            <div className="movie-platforms">
              <div className="text">
                Available on <i className="icon-play-circled2" />
              </div>
              <div className="platform-list">
                {loaded &&
                  suggestionData &&
                  suggestionData.providers &&
                  suggestionData.providers.map((platform) => (
                    <img
                      src={platform.img}
                      alt={platform.providers}
                      key={platform.providers}
                    />
                  ))}
                {loaded &&
                  suggestionData &&
                  suggestionData.providers &&
                  suggestionData.providers.length === 0 && (
                    <span>0 Platform</span>
                  )}
                {!loaded && <div className="loadingInfos" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggestion;
