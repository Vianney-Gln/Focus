import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BurgerContext from "../contexts/BurgerContext";
import "../styles/popupMenu.css";

const PopupMenu = () => {
  const burgerContext = useContext(BurgerContext);

  /* A chaque clique sur un link le popupMenu se ferme et le burger retrouve son état initial */
  return (
    <div className="popup-menu-elements">
      <ul className="popup-menu-elements-top">
        <Link to="/category/upcomming">
          <li
            role="presentation"
            onClick={() => {
              burgerContext.setDisplayPopupMenu(
                !burgerContext.displayPopupMenu
              );
              burgerContext.setOpen(false);
            }}
          >
            UPCOMING
          </li>
        </Link>
        <Link to="/category/now-playing">
          <li
            role="presentation"
            onClick={() => {
              burgerContext.setDisplayPopupMenu(
                !burgerContext.displayPopupMenu
              );
              burgerContext.setOpen(false);
            }}
          >
            NOW PLAYING
          </li>
        </Link>
        <Link to="/category/popular">
          <li
            role="presentation"
            onClick={() => {
              burgerContext.setDisplayPopupMenu(
                !burgerContext.displayPopupMenu
              );
              burgerContext.setOpen(false);
            }}
          >
            POPULAR
          </li>
        </Link>
      </ul>
      <ul className="popup-menu-elements-bottom">
        <Link to="/mylist">
          <li
            role="presentation"
            onClick={() => {
              burgerContext.setDisplayPopupMenu(
                !burgerContext.displayPopupMenu
              );
              burgerContext.setOpen(false);
            }}
            className="my-list"
            type="button"
          >
            MYLIST
          </li>
        </Link>
        <Link to="/aboutus">
          <li
            role="presentation"
            onClick={() => {
              burgerContext.setDisplayPopupMenu(
                !burgerContext.displayPopupMenu
              );
              burgerContext.setOpen(false);
            }}
            className="about-us"
            type="button"
          >
            ABOUT US
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default PopupMenu;
