import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BurgerContext from "../contexts/BurgerContext";
import { Logo, ElementList, LogoMobile, SearchBar } from "../components";
import "../styles/myList.css";
import { AuthContext } from "../contexts/AuthContext";
import { getListofMyList } from "../services/FirebaseRealtimeDatabase";

/* structure du composant myList */
const MyList = () => {
  // gestion du titre du document
  document.title = "mylist-Focus";
  // Pour les redirections
  const history = useHistory();

  // useContext des différents context
  const burgerContext = useContext(BurgerContext);
  const authContext = useContext(AuthContext);

  // Si page chargé mais pas connecté
  if (!authContext.isLogged) {
    history.push("/");
  } else {
    burgerContext.displayBurger();
  }

  /* creation d'une boucle pour appeler plusieurs fois le composant <ElementList /> */
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getListofMyList(authContext.userID);
      const map = data.map((movie) => (
        <ElementList key={movie.id} data={movie} />
      ));
      setItemList(map);
    })();
  }, []);

  return (
    <>
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
              <button type="button" className="button-margin-left btn-aperture">
                Asc
              </button>
            </div>
            <h1>MY LIST</h1>
          </div>
        </div>

        <div className="container-items-list">{itemList}</div>
      </div>
    </>
  );
};
export default MyList;
