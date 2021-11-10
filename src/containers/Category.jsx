import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  BackgroundImage,
  ItemsPreviews,
  Logo,
  LogoMobile,
  SearchBar,
} from "../components";
import "../styles/category.css";
import "../styles/backgroundImage.css";
import BurgerContext from "../contexts/BurgerContext";
import {
  tmdbMovieUpcoming,
  tmdbMoviePopular,
  tmdbMovieNowPlaying,
} from "../services/TheMovieDbFunctions";

const Category = () => {
  const [movies, setMovies] = useState([]);

  // utilisation du contexte pour garder le burger affiché même au rechargement de la page
  const burgerContext = useContext(BurgerContext);
  burgerContext.displayBurger();
  const { cat } = useParams();
  console.log(cat);
  let fetchFunction;

  switch (cat) {
    case "upcoming":
      fetchFunction = tmdbMovieUpcoming;
      break;
    case "popular":
      fetchFunction = tmdbMoviePopular;
      break;
    case "now-playing":
      fetchFunction = tmdbMovieNowPlaying;
      break;
    default:
      fetchFunction = tmdbMovieUpcoming;
  }

  useEffect(() => {
    const run = async () => {
      const data = await fetchFunction();
      console.log(data);
      const map = data.map((datamovie) => (
        <ItemsPreviews key={datamovie.id} data={datamovie} />
      ));
      setMovies(map);
    };
    run();
  }, [cat]);

  return (
    <>
      <BackgroundImage />

      <div className="container-category">
        <div className="barre-header">
          <div className="logo-search">
            <Logo />
            <LogoMobile />
            <SearchBar />
          </div>
        </div>

        <div className="container-previous-items-center">
          <div className="title-category">
            <h1>{cat.replace("-", "")}</h1>
          </div>
          <div className="container-previous-items">{movies}</div>
        </div>
      </div>
    </>
  );
};
export default Category;
