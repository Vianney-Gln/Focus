import React, { useContext, useState } from "react";
// Packages
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// Contexts
import { AuthContext } from "../contexts/AuthContext";
// Services
import {
  removeFromMyList,
  updateUserMyList,
} from "../services/FirebaseRealtimeDatabase";
// Css
import "../styles/elementListe.scss";

const ElementList = ({ data }) => {
  const authContext = useContext(AuthContext);
  const [check, setCheck] = useState(data.user.watch);

  /* fonction qui inverse l'état de check, au click */
  async function handleCheck() {
    try {
      setCheck(!check);
      if (authContext.isLogged) {
        // Connected
        await updateUserMyList(authContext.userID, data.id, {
          watch: !check,
        });
      }
      return true;
    } catch (err) {
      return console.log(err);
    }
  }

  /* fonction qui convertie le nombre de minutes en heures + minutes */
  const hours = (nbrMinutes) => {
    const nbrHours = (nbrMinutes / 60).toFixed(0);
    const minutes = (nbrMinutes % 60).toFixed(0);
    return `${nbrHours}h${minutes}`;
  };

  // State for rating, interact with function at bottom
  const [rating, setRating] = useState(data.user.rating);
  /**
   * Handle Rating change with Database
   * @param {number} value Rating /5
   * @param {number} movieID Movie ID
   */
  const handleRating = async (value, movieID) => {
    try {
      setRating(value);
      // si connecter enregistrer le rating
      if (authContext.isLogged) {
        // Connected
        await updateUserMyList(authContext.userID, movieID, {
          rating: value,
        });
      }
      return true;
    } catch (err) {
      return console.log(err);
    }
  };

  const handleRemoveFromMyList = async (movieID) => {
    try {
      // si connecter enregistrer le rating
      if (authContext.isLogged) {
        // Connected
        await removeFromMyList(authContext.userID, movieID);
        // remove element from DOM
        console.log(movieID);
        document.querySelector(`.movie_${movieID}`).remove();
      }
      return true;
    } catch (err) {
      return console.log(err);
    }
  };

  const [fullyLoaded, setFullyLoaded] = useState(false);

  return (
    <div className={`container-element-list movie_${data.id}`}>
      <div className="element-list">
        <div className="image-movie">
          {!fullyLoaded && <div className="loadingInfos" />}
          <img
            src={data.poster}
            alt="film"
            onLoad={() => setFullyLoaded(true)}
            style={fullyLoaded ? {} : { display: "none" }}
          />
        </div>
        <div className="title-movie">
          <h2>{data.title}</h2>
        </div>
        <div className="author-movie">{data.author}</div>
        <div className="release-date-movie">{data.date}</div>
        <div className="duration-movie">{`${hours(data.duration)}`}</div>
        <div className="rating-movie">
          <Rating
            onClick={(value) => handleRating(value, data.id)}
            ratingValue={rating}
          />
        </div>
        <div
          onClick={handleCheck}
          onKeyDown={handleCheck}
          className="checkbox"
          role="button"
          tabIndex="0"
        >
          <p>
            {/* si le state check est true alors la case sera cochée */}
            <span>{check && <i className="fa fa-check" />}</span>
          </p>
        </div>
        <div className="remove-movie">
          <button type="button" onClick={() => handleRemoveFromMyList(data.id)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElementList;
