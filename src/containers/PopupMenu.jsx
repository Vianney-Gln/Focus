import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BurgerContext from "../contexts/BurgerContext";
import "../styles/popupMenu.css";

const PopupMenu = () => {
  const burgerContext = useContext(BurgerContext);

  return (
    <div className="popup-menu-elements">
      <ul className="popup-menu-elements-top">
        <Link to="/category">
          <li
            role="presentation"
            onClick={() =>
              burgerContext.setDisplayPopupMenu(!burgerContext.displayPopupMenu)
            }
          >
            UPCOMING
          </li>
        </Link>
        <Link to="/category">
          <li
            role="presentation"
            onClick={() =>
              burgerContext.setDisplayPopupMenu(!burgerContext.displayPopupMenu)
            }
          >
            TOP RATED
          </li>
        </Link>
        <Link to="/category">
          <li
            role="presentation"
            onClick={() =>
              burgerContext.setDisplayPopupMenu(!burgerContext.displayPopupMenu)
            }
          >
            LATEST
          </li>
        </Link>
      </ul>
      <ul className="popup-menu-elements-bottom">
        <Link to="/mylist">
          <li
            role="presentation"
            onClick={() =>
              burgerContext.setDisplayPopupMenu(!burgerContext.displayPopupMenu)
            }
            className="my-list"
            type="button"
          >
            MYLIST
          </li>
        </Link>
        <Link to="/aboutus">
          <li
            role="presentation"
            onClick={() =>
              burgerContext.setDisplayPopupMenu(!burgerContext.displayPopupMenu)
            }
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
