import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "../styles/suggestion.scss";
import imgNet from "../assets/images/netflix.png";
import imgCanal from "../assets/images/canal.png";
import "../styles/starRate.css";
import { SignContext } from "../contexts/SignContext";
import { AuthContext } from "../contexts/AuthContext";

import SlideImg from "../assets/images/westworlded.jpg";
import { updateMovie } from "../services/FirebaseRealtimeDatabase";

const Suggestion = ({ data, refValue, setBackgroundSuggestion }) => {
  const signinContext = useContext(SignContext);
  const authContext = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [currentData, setCurrentData] = useState(1);
  const suggestionData = data[currentData];

  setBackgroundSuggestion(suggestionData.background);

  const handleChangeSlideshow = (num) => {
    let newCurrent = currentData + num;

    if (newCurrent < 0) {
      newCurrent = 2;
    }
    if (newCurrent > 2) {
      newCurrent = 0;
    }

    setCurrentData(newCurrent);
  };

  const handleAddToMyList = async () => {
    try {
      if (authContext.isLogged) {
        // Ajouter a MaList
        await updateMovie(460458);
      } else {
        // Demander de se connecter
        signinContext.showSignIn();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRating = (value) => {
    setRating(value);
    // si connecter enregistrer le rating
    if (authContext.isLogged) {
      // Connected
    }
    // Sinon pas enregistrer
    else {
      // not connected
    }
  };

  return (
    <>
      {/* <BackgroundImage /> */}
      <section className="suggestion" ref={refValue}>
        <div className="suggestion-body">
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
                    suggestionData && suggestionData.background
                      ? suggestionData.background
                      : SlideImg
                  }
                  alt="slideimg"
                />
                <button type="button" className="btn-fleche-slideShow">
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

          <div className="suggestion-informations">
            <h1>
              {suggestionData && suggestionData.title
                ? suggestionData.title
                : "Not documented"}
            </h1>
            <div className="movie-informations">
              <div className="movie-author">
                {suggestionData && suggestionData.author
                  ? suggestionData.author
                  : "Not documented"}
              </div>
              <div className="movie-year">
                {suggestionData && suggestionData.date.year
                  ? suggestionData.date.year
                  : "Not documented"}
              </div>
              <div className="movie-duration">
                {suggestionData && suggestionData.duration.hours
                  ? `${suggestionData.duration.hours}h ${suggestionData.duration.minutes}`
                  : "Not documented"}
              </div>
            </div>
            <div className="movie-synopsis">
              {suggestionData && suggestionData.synopsis
                ? suggestionData.synopsis
                : "Not documented"}
            </div>
            <div className="movie-mores">
              <div className="movie-rating">
                <Rating onClick={handleRating} ratingValue={rating} />
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
