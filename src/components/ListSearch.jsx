import React from "react";
import "../styles/listSearch.scss";

function ListSearch({ listTitle, search, setSearch }) {
  return (
    <ul
      onMouseLeave={() => setSearch("")}
      className={search.length > 3 ? "listSearch" : "listSearch-display-none"}
    >
      {listTitle}
    </ul>
  );
}

export default ListSearch;
