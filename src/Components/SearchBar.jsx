import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => (
  <div className="search">
    <input type="text" className="searchTerm" placeholder="Search..." />
    <button type="submit" className="searchButton">
      <i className="fa fa-search" />
    </button>
  </div>
);

export default SearchBar;
