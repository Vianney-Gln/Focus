// React
import React from "react";
// styles
import "../styles/listSearch.scss";

function ListSearch({ listTitle, search, setSearch }) {
  // quand la souris leave la liste la valeur de l'input = "" et la liste disparait
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
