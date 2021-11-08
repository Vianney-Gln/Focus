import React from "react";
/* import StarRate from "../components/StarRate"; */
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
// import "../styles/index.css";
// import "../styles/suggestion.css";
import "../styles/suggestion.scss";
// import Slideshow from "../components/Slidshow";
// import BackgroundImage from "../components/BackgroundImage";
import imgNet from "../assets/images/netflix.png";
import imgCanal from "../assets/images/canal.png";
import "../styles/starRate.css";
import SlideImg from "../assets/images/westworlded.jpg";

const Suggestion = ({ refValue }) => (
  <>
    {/* <BackgroundImage /> */}
    <section className="suggestion" ref={refValue}>
      <div className="suggestion-body">
        <div className="slideshow">
          <button type="button" className="btn-fleche-slideShow">
            <i className="icon-right-open-big" />
          </button>

          <img className="img-slideshow" src={SlideImg} alt="slideimg" />

          <button type="button" className="btn-fleche-slideShow">
            <i className="icon-left-open-big" />
          </button>
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
            concept catches on, with underground &quot;fight clubs&quot; forming
            in every town, until an eccentric gets in the way and ignites an
            out-of-control spiral toward oblivion.
          </div>
          <div className="movie-mores">
            <div className="movie-rating">
              <Rate />
            </div>
            <div className="movie-addtomylist">
              <i className="icon-plus" /> Add to my list
            </div>
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

export default Suggestion;
