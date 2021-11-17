import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "../styles/suggestion.scss";
import imgNet from "../assets/images/netflix.png";
import imgCanal from "../assets/images/canal.png";
import "../styles/starRate.css";
import { SignContext } from "../contexts/SignContext";
import { AuthContext } from "../contexts/AuthContext";

import SlideImg from "../assets/images/westworlded.jpg";
import {
  addMovie,
  updateMovie,
  addMovieToMyList,
  removeFromMyList,
  updateUserMyList,
  getMovieListByID,
  getMovieofMyList,
} from "../services/FirebaseRealtimeDatabase";
import Player from "./Player";

const Suggestion = ({ data, userMyList }) => {
  const signinContext = useContext(SignContext);
  const authContext = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  /**
   * Format userMyList to get only the ID of movie
   */
  const userMovieMyListID = userMyList.map((movie) => movie.id);

  /**
   * State who set the text in Button Add / Remove to MyList
   */
  const [buttonType, setButtonType] = useState(null);

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
        const movieAlreadyExist = await getMovieListByID(data.id);
        // If Not exist
        if (!movieAlreadyExist) {
          // try to add this movie to the database
          const movieData = {
            title: data.title || "Not documented",
            poster: data.background || "Not documented",
            author: data.author || "Not documented",
            date: data.date.base || "Not documented",
            duration: data.duration.base || "Not documented",
          };
          await addMovie(data.id, movieData);
        }
        // If Exist
        else {
          // try to update this movie to the database
          const movieData = {
            title: data.title || "Not documented",
            poster: data.background || "Not documented",
            author: data.author || "Not documented",
            date: data.date.base || "Not documented",
            duration: data.duration.base || "Not documented",
          };
          await updateMovie(data.id, movieData);
        }
        // get if user already rated this movie
        const movieInfo = await getMovieofMyList(authContext.userID, data.id);
        // update to add user on movie
        await addMovieToMyList(
          authContext.userID,
          data.id,
          movieInfo.user.rating || null
        );
        // Change button to "Remove from my list"
        buttonMyList(false);
      }
      if (authContext.isLogged) {
        // try to add this movie to the database
        const movieData = {
          title: data.title || "Not documented",
          poster: data.background || "Not documented",
          author: data.author || "Not documented",
          date: data.date.base || "Not documented",
          duration: data.duration.base || "Not documented",
        };
        await addMovie(data.id, movieData);
        // update to add user on movie
        await addMovieToMyList(authContext.userID, data.id);
        // Change button to "Remove from my list"
        buttonMyList(false);
      } else {
        // Demander de se connecter
        signinContext.showSignIn();
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Remove the movie from the user list if connected
   */
  const handleRemoveOfMyList = async () => {
    try {
      // Remove movie from MaList
      if (authContext.isLogged) {
        await removeFromMyList(authContext.userID, data.id);
        // Change button to "Add to my list"
        buttonMyList(true);
      } else {
        // Demander de se connecter
        signinContext.showSignIn();
      }
    } catch (error) {
      console.log(error);
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
      // Change button to "Remove from my list"
      buttonMyList(false);
    }
    return true;
  };

  const [player, setPlayer] = useState(false);

  const handlePlayer = () => {
    setPlayer(!player);
  };
  return (
    <>
      <Player player={player} data={data} handlePlayer={handlePlayer} />
      {/* <BackgroundImage /> */}
      <section className="suggestion">
        <div className="suggestion-body">
          <div className="containers-slideshow">
            <div className="slideshow">
              <button type="button" className="btn-fleche-slideShow">
                <i className="icon-left-open-big" />
              </button>
              <div className="container-image-player">
                <img
                  className="img-slideshow"
                  src={data ? data.background : SlideImg}
                  alt="slideimg"
                />
                <button
                  type="button"
                  className="btn-fleche-slideShow"
                  onClick={handlePlayer}
                >
                  <i className="icon-play" />
                </button>
              </div>
              <button type="button" className="btn-fleche-slideShow">
                <i className="icon-right-open-big" />
              </button>
            </div>
          </div>

          <div className="suggestion-informations">
            <h1>{data ? data.title : "Not documented"}</h1>
            <div className="movie-informations">
              <div className="movie-author">
                {data ? data.author : "Not documented"}
              </div>
              <div className="movie-year">
                {data ? data.date.year : "Not documented"}
              </div>
              <div className="movie-duration">
                {data && data.duration
                  ? `${data.duration.hours}h ${data.duration.minutes}`
                  : "Not documented"}
              </div>
            </div>
            <div className="movie-synopsis">
              {data ? data.synopsis : "Not documented"}
            </div>
            <div className="movie-mores">
              <div className="movie-rating">
                <Rating
                  onClick={(value) => handleRating(value, data.id)}
                  ratingValue={rating}
                />
              </div>
              {userMovieMyListID.includes(data.id) && (
                <button
                  className="movie-addtomylist"
                  type="button"
                  onClick={handleRemoveOfMyList}
                >
                  {buttonType !== null && buttonType}
                  {buttonType === null && (
                    <>
                      <i className="icon-cancel" /> Remove
                      <br />
                      from my list
                    </>
                  )}
                </button>
              )}
              {!userMovieMyListID.includes(data.id) && (
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
                  <img src={imgNet} alt="Netflix" />
                  <img src={imgCanal} alt="Canal+" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Suggestion;
