// react
import React, { useContext } from "react";
// react router dom
import { Link, useHistory } from "react-router-dom";
// contexts
import { BurgerContext } from "../contexts/BurgerContext";
import { AuthContext } from "../contexts/AuthContext";
import { SignContext } from "../contexts/SignContext";
// styles
import "../styles/popupMenu.css";

const PopupMenu = () => {
  const burgerContext = useContext(BurgerContext);
  const authContext = useContext(AuthContext);
  const signContext = useContext(SignContext);
  const history = useHistory();

  const mylistNotConnected = () => {
    signContext.showSignIn("/mylist");
  };
  const mylistConnected = () => {
    burgerContext.setDisplayPopupMenu(!burgerContext.displayPopupMenu);
    burgerContext.setOpen(false);
  };

  /* A chaque clique sur un link le popupMenu se ferme et le burger retrouve son état initial */
  return (
    <div className="popup-menu-elements">
      <ul className="popup-menu-elements-top">
        <Link to="/category/upcoming">
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
      </ul>
      <ul className="popup-menu-elements-bottom">
        {authContext.isLogged && (
          <Link to="/mylist">
            <li
              role="presentation"
              onClick={mylistConnected}
              className="my-list"
              type="button"
            >
              MYLIST
            </li>
          </Link>
        )}
        {!authContext.isLogged && (
          <li
            role="presentation"
            onClick={mylistNotConnected}
            className="my-list"
            type="button"
          >
            MYLIST
          </li>
        )}
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
        {!authContext.isLogged && (
          <li
            type="button"
            onClick={() => signContext.showSignIn()}
            role="presentation"
          >
            SIGN IN
          </li>
        )}
        {authContext.isLogged && (
          <li
            type="button"
            onClick={() => {
              authContext.userLogout();
              history("/");
            }}
            role="presentation"
          >
            LOGOUT
          </li>
        )}
      </ul>
    </div>
  );
};

export default PopupMenu;
