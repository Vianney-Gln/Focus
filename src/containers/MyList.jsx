import React from "react";
import Logo from "../components/Logo";
import Burger from "../components/Burger";
import "../styles/myList.css";
import ElementList from "../components/ElementList";

const MyList = () => (
  <div className="myList">
    <div className="barre-logo-burger">
      <Logo />
      <Burger />
    </div>
    <div className="container-views-titles">
      <div className="views-titles">
        <div className="viewed-asc">
          <button type="button">Viewed</button>
          <button type="button">Asc</button>
        </div>
        <h1>MY LIST</h1>
      </div>
    </div>

    <div className="container-element-list">
      <ElementList />
    </div>
  </div>
);

export default MyList;
