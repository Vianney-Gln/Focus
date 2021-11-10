import React, { useContext, useState } from "react";
import { Rating } from "react-simple-star-rating";
import "../styles/suggestion.scss";
import imgNet from "../assets/images/netflix.png";
import imgCanal from "../assets/images/canal.png";
import "../styles/starRate.css";
import { SignContext } from "../contexts/SignContext";
import { AuthContext } from "../contexts/AuthContext";
import SlideImg from "../assets/images/westworlded.jpg";

const Suggestion = ({ refValue }) => {
  const signinContext = useContext(SignContext);
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
      <section className="suggestion" ref={refValue}>
        <div className="suggestion-body">
          <div className="containers-slideshow">
            <div className="slideshow">
              <button type="button" className="btn-fleche-slideShow">
                <i className="icon-left-open-big" />
              </button>
              <div className="container-image-player">
                <img className="img-slideshow" src={SlideImg} alt="slideimg" />
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
            <h1>Fight Club</h1>
            <div className="movie-informations">
              <div className="movie-author">David Fincher</div>
              <div className="movie-year">1999</div>
              <div className="movie-duration">2h 19m</div>
            </div>
            <div className="movie-synopsis">
              A ticking-time-bomb insomniac and a slippery soap salesman channel
              primal male aggression into a shocking new form of therapy. Their
              concept catches on, with underground &quot;fight clubs&quot;
              forming in every town, until an eccentric gets in the way and
              ignites an out-of-control spiral toward oblivion.
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
