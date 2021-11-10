import React, { useEffect, useState, useContext } from "react";
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
import { tmdbMovieUpcoming } from "../services/TheMovieDbFunctions";

const Category = () => {
  const [movies, setMovies] = useState([]);

  // utilisation du contexte pour garder le burger affiché même au rechargement de la page
  const burgerContext = useContext(BurgerContext);
  burgerContext.displayBurger();

  useEffect(() => {
    const run = async () => {
      const data = await tmdbMovieUpcoming();
      console.log(data);
      const map = data.map((datamovie) => (
        <ItemsPreviews key={datamovie.id} data={datamovie} />
      ));
      setMovies(map);
    };
    run();
  }, []);

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
            <h1>Category</h1>
          </div>
          <div className="container-previous-items">{movies}</div>
        </div>
      </div>
    </>
  );
};
export default Category;
