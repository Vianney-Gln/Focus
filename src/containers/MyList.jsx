
import { React, useContext } from "react";
import "../styles/myList.css";
import BurgerContext from "../contexts/BurgerContext";
import { Logo, ElementList } from "../components";
import "../styles/myList.css";

/* structure du composant myList */
const MyList = () => {
  // utilisation du contexte pour garder le burger affiché même au rechargement de la page
  const burgerContext = useContext(BurgerContext);
  burgerContext.displayBurger();

  /* creation d'une boucle pour appeler plusieurs fois le composant <ElementList /> */

  const itemLists = [];

  for (let i = 0; i < 10; i += 1) {
    itemLists.push(<ElementList />);
  }

  return (
    <>
      <div className="myList">
        <div className="barre-logo-burger">
          <Logo />
        </div>

        <div className="container-views-titles">
          <div className="views-titles">
            <div className="viewed-asc">
              <button className="viewed btn-aperture" type="button">
                Viewed
              </button>
              <button type="button" className="button-margin-left btn-aperture">
                Asc
              </button>
            </div>
            <h1>MY LIST</h1>
          </div>
        </div>

        <div className="container-items-list">{itemLists}</div>
      </div>
    </>
  );
};
export default MyList;
