import React, { useContext } from "react";
/* import StarRate from "../components/StarRate"; */
import Rate from "rc-rate";
import { Link } from "react-router-dom";
import BurgerContext from "../contexts/BurgerContext";
import "rc-rate/assets/index.css";
// import "../styles/index.css";
// import "../styles/suggestion.css";
import "../styles/suggestion.scss";
// import Slideshow from "../components/Slidshow";
// import BackgroundImage from "../components/BackgroundImage";
import imgNet from "../assets/images/netflix.png";
import imgCanal from "../assets/images/canal.png";
import "../styles/starRate.css";

const Suggestion = ({ refValue }) => {
  // recuperation du contexte
  const burgerContext = useContext(BurgerContext);

  return (
    <>
      {/* <BackgroundImage /> */}
      <section className="suggestion" ref={refValue}>
        <div className="goto-category">
          <Link onClick={burgerContext.displayBurger} to="/category">
            <span>More Upcomming →</span>
          </Link>
        </div>

        <div className="suggestion-body">
          <div className="slideshow" />

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

        {/* <div className="suggestionInfocarou">
        <div className="caroussel">
          <Slideshow />
        </div>
        <div>
          <div className="carroumobile">
            <span className="fleche"> ◀︎ </span>
            <div className="infoFilm">
              <h1 className="letitle">Inception</h1>
              <div className="inforea">
                <h3>Christopher Nolan</h3>
                <h3>2010</h3>
                <h3>2h 28m</h3>
              </div>
              <p className="synopsis">
                Dom Cobb is an experienced thief - the best there is in the
                perilous art of extraction: his specialty is to appropriate an
                individuals most precious secrets, buried deep in his
                subconscious, while he dream and that his mind is particularly
                vulnerable. Highly sought after for his talents in the murky
                world of industrial espionage, Cobb has also become a globally
                hunted fugitive who has lost everything he holds dear. But one
                final mission could get him back to his life before - provided
                he can accomplish the impossible: exception. Instead of stealing
                a dream, Cobb and his team must do the opposite: implant an idea
                into an individuals mind. If they succeed, it could be the
                perfect crime. And yet, methodical and talented as they are,
                nothing could have prepared Cobb and his partners for a
                formidable foe who seems to be consistently one step ahead of
                them. An enemy that only Cobb could have suspected existed.
              </p>
            </div>
            <span className="fleche"> ▶︎ </span>
          </div>
          <div className="infobas">
            <div className="star">
              <Rate />
            </div>
            <div className="Addmylist">
              <button type="button"> + </button>
              <h3>Add to my list</h3>
            </div>
            <div className="availableon">
              <div className="availableonpic">
                <h4>Available On</h4>
                <h4 className="pictostream">▶︎</h4>
              </div>
              <div>
                <img src={imgNet} alt="logonetflix" className="iconestream" />
                <img src={imgCanal} alt="logonetflix" className="iconestream" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </section>
    </>
  );
};

export default Suggestion;
