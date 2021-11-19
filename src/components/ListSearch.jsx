// React
import React from "react";
// styles
import "../styles/listSearch.scss";

function ListSearch({ listTitle, search }) {
  return (
    <ul
      className={search.length > 3 ? "listSearch" : "listSearch-display-none"}
    >
      {listTitle}
    </ul>
  );
}

export default ListSearch;
