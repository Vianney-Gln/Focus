import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "../styles/suggestion.scss";
import imgNet from "../assets/images/netflix.png";
import imgCanal from "../assets/images/canal.png";
import "../styles/starRate.css";
import { SignContext } from "../contexts/SignContext";
import { AuthContext } from "../contexts/AuthContext";

import SlideImg from "../assets/images/westworlded.jpg";
import PlayerContext from "../contexts/PlayerContext";
import {
  addMovie,
  addMovieToMyList,
  updateUserMyList,
} from "../services/FirebaseRealtimeDatabase";
import Player from "./Player";

const Suggestion = ({ data }) => {
  const signinContext = useContext(SignContext);
  const authContext = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const handleAddToMyList = async () => {
    try {
      // Ajouter a MaList
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
      } else {
        // Demander de se connecter
        signinContext.showSignIn();
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  const playerContext = useContext(PlayerContext);

  return (
    <>
      <Player data={data} />
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
                  onClick={playerContext.handlePlayer}
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
              <button
                className="movie-addtomylist"
                type="button"
                onClick={handleAddToMyList}
              >
                <i className="icon-plus" /> Add to my list
              </button>
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
