import React, { useContext } from "react";
/* import StarRate from "../components/StarRate"; */
import Rate from "rc-rate";
import { Link } from "react-router-dom";
import BurgerContext from "../contexts/BurgerContext";
import "rc-rate/assets/index.css";
import "../styles/index.css";
import "../styles/suggestion.css";

import Slideshow from "../components/Slidshow";
import BackgroundImage from "../components/BackgroundImage";
import imgNet from "../assets/images/netflix.png";
import imgCanal from "../assets/images/canal.png";
import "../styles/starRate.css";

const Suggestion = () => {
  const burgerContext = useContext(BurgerContext);

  return (
    <div className="suggestion">
      <BackgroundImage />

      <div className="redirectcat">
        <Link onClick={burgerContext.displayBurger} to="/category">
          <h3>Go to Latest →</h3>
        </Link>
      </div>

      <div className="suggestionInfocarou">
        <section className="caroussel">
          <Slideshow />
        </section>
        <div>
          <div className="carroumobile">
            <span className="fleche"> ◀︎ </span>
            <section className="infoFilm">
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
            </section>
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
      </div>
    </div>
  );
};

export default Suggestion;
