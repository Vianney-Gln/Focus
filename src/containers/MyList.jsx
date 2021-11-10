import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BurgerContext from "../contexts/BurgerContext";
import { Logo, ElementList, LogoMobile, SearchBar } from "../components";
import "../styles/myList.css";
import { AuthContext } from "../contexts/AuthContext";

/* structure du composant myList */
const MyList = () => {
  const history = useHistory();
  // utilisation du contexte pour garder le burger affiché même au rechargement de la page
  const burgerContext = useContext(BurgerContext);
  // burgerContext.displayBurger();

  const authContext = useContext(AuthContext);
  useEffect(() => {
    if (!authContext.isLogged) {
      history.push("/");
    } else {
      burgerContext.displayBurger();
    }
  }, []);

  /* creation d'une boucle pour appeler plusieurs fois le composant <ElementList /> */

  const itemLists = [];

  for (let i = 0; i < 10; i += 1) {
    itemLists.push(<ElementList />);
  }

  return (
    <>
      {authContext.isLogged && (
        <div className="myList">
          <div className="barre-logo-burger">
          <Logo />
          <SearchBar />
        </div>
        <div className="barre-logo-burger-mobile">
          <LogoMobile />
          <SearchBar />
        </div>

          <div className="container-views-titles">
            <div className="views-titles">
              <div className="viewed-asc">
                <button className="viewed btn-aperture" type="button">
                  Viewed
                </button>
                <button
                  type="button"
                  className="button-margin-left btn-aperture"
                >
                  Asc
                </button>
              </div>
              <h1>MY LIST</h1>
            </div>
          </div>

          <div className="container-items-list">{itemLists}</div>
        </div>
      )}
    </>
  );
};
export default MyList;
