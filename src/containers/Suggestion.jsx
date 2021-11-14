import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "../styles/suggestion.scss";
import imgNet from "../assets/images/netflix.png";
import imgCanal from "../assets/images/canal.png";
import "../styles/starRate.css";
import { SignInContext } from "../contexts/SignInContext";
import { AuthContext } from "../contexts/AuthContext";

import SlideImg from "../assets/images/westworlded.jpg";

const Suggestion = ({ data }) => {
  const signinContext = useContext(SignInContext);
  const authContext = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const handleAddToMyList = () => {
    if (authContext.isLogged) {
      // Ajouter a MaList
    } else {
      // Demander de se connecter
      signinContext.showSignIn();
    }
  };

  const handleRating = (value) => {
    setRating(value);
    // si connecter enregistrer le rating
    // sinon pas enregistrer
  };

  return (
    <>
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
                <button type="button" className="btn-fleche-slideShow">
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
                {data
                  ? `${data.duration.hours}h ${data.duration.minutes}`
                  : "Not documented"}
              </div>
            </div>
            <div className="movie-synopsis">
              {data ? data.synopsis : "Not documented"}
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
