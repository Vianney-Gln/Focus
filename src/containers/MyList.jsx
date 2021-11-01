import React from "react";
import Logo from "../components/Logo";
import Burger from "../components/Burger";
import "../styles/myList.css";
import ElementList from "../components/ElementList";

/* structure du composant myList */
const MyList = () => {
  /* creation d'une boucle pour appeler plusieurs fois le composant <ElementList /> */

  const itemLists = [];

  for (let i = 0; i < 10; i += 1) {
    itemLists.push(<ElementList />);
  }

  return (
    <div className="myList">
      <div className="barre-logo-burger">
        <Logo />
        <Burger />
      </div>

      <div className="container-views-titles">
        <div className="views-titles">
          <div className="viewed-asc">
            <button type="button">Viewed</button>
            <button type="button" className="button-margin-left">
              Asc
            </button>
          </div>
          <h1>MY LIST</h1>
        </div>
      </div>

      {itemLists}
    </div>
  );
};
export default MyList;
