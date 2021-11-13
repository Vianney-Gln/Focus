import React from "react";
import "../styles/listSearch.scss";

function ListSearch({ listTitle }) {
  return <ul className="listSearch">{listTitle} </ul>;
}

export default ListSearch;
