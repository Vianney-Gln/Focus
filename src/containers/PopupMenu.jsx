import React from "react";
import { Link } from "react-router-dom";
import "../styles/popupMenu.css";

const PopupMenu = () => (
  <div className="popup-menu-elements">
    <ul className="popup-menu-elements-top">
      <Link to="/category">
        <li>UPCOMING</li>
      </Link>
      <Link to="/category">
        <li>TOP RATED</li>
      </Link>
      <Link to="/category">
        <li>LATEST</li>
      </Link>
    </ul>
    <ul className="popup-menu-elements-bottom">
      <Link to="/mylist">
        <li className="my-list" type="button">
          MYLIST
        </li>
      </Link>
      <Link to="/aboutus">
        <li className="about-us" type="button">
          ABOUT US
        </li>
      </Link>
    </ul>
  </div>
);

export default PopupMenu;
