import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  BackgroundImage,
  ItemsPreviews,
  Logo,
  LogoMobile,
  SearchBar,
} from "../components";
import "../styles/category.css";
import "../styles/backgroundImage.css";
import { BurgerContext } from "../contexts/BurgerContext";
// import BackgroundContext from "../contexts/BackgroundContext";
import {
  tmdbMovieUpcoming,
  tmdbMoviePopular,
  tmdbMovieNowPlaying,
} from "../services/TheMovieDbFunctions";

const Category = () => {
  // gestion du titre du document
  document.title = "category-Focus";
  const [movies, setMovies] = useState([]);

  // utilisation du contexte pour garder le burger affiché même au rechargement de la page
  const burgerContext = useContext(BurgerContext);
  burgerContext.displayBurger();

  // récupération du paramètre d'url cat de category
  const { cat } = useParams();

  // récupération de l'history pour redirection vers 404 en cas d'erreur de parametre d'url

  const history = useHistory();

  // initialisation d'une variable qui répupère la fonction de fetching depuis services en fonction de la category de film surlaquelle l'utilisateur appuis
  let fetchFunction = tmdbMovieUpcoming;

  // 3 fonctions de fetching qui affichent les films en fonction des categories, par defaut on met Upcoming
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
      history.push("/error404");
  }

  // on relance le fetch chaque fois que la valeur de cat change
  useEffect(() => {
    const run = async () => {
      const data = await fetchFunction();
      const map = data.map((datamovie) => (
        <ItemsPreviews key={datamovie.id} data={datamovie} id={datamovie.id} />
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
            <h1>{cat.replace("-", " ")}</h1>
          </div>
          <div className="container-previous-items">{movies}</div>
        </div>
      </div>
    </>
  );
};
export default Category;
