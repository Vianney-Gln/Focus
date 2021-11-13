import React, { useState, useEffect } from "react";
// import "../styles/SearchBar.css";
import "../styles/SearchBar.scss";
import { tmdbSearchMovies } from "../services/TheMovieDbFunctions";
import ListSearch from "./ListSearch";

const SearchBar = () => {
  // states
  const [search, setSearch] = useState("");
  const [listTitle, setListTitle] = useState([]);

  useEffect(() => {
    // fonction qui recherche un titre de film
    const run = async () => {
      if (search.length >= 3) {
        const result = await tmdbSearchMovies(search);

        // cette fonction limite à 5 la liste des films trouvés
        const map = result.map((res, index) =>
          index < 5 ? <li>{res.title}</li> : ""
        );

        setListTitle(map);
      } else {
        setListTitle([]);
      }
    };
    run();
  }, [search]);

  return (
    <>
      <div className="search">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="searchTerm"
          placeholder="Search..."
          value={search}
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search" />
        </button>
      </div>
      <ListSearch listTitle={listTitle} />
    </>
  );
};

export default SearchBar;
