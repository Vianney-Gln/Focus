import { React, useState } from "react";
import Hamburger from "hamburger-react";
import Logo from "../components/Logo";
import PopupMenu from "./PopupMenu";
import "../styles/myList.css";
import ElementList from "../components/ElementList";

/* structure du composant myList */
const MyList = () => {
  // state pour l'état du menu popup
  const [openMenu, setOpenMenu] = useState(false);

  /* creation d'une boucle pour appeler plusieurs fois le composant <ElementList /> */

  const itemLists = [];

  for (let i = 0; i < 10; i += 1) {
    itemLists.push(<ElementList />);
  }

  return (
    <>
      {openMenu && <PopupMenu />}
      <div className="myList">
        <div className="barre-logo-burger">
          <Logo />
          <Hamburger
            onToggle={() => setTimeout(() => setOpenMenu(true), 100)}
          />
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
