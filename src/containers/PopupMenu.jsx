import React from "react";
import "../styles/popupMenu.css";

const PopupMenu = () => (
  <div className="popup-menu-elements">
    <div className="cross-close">
      <button type="button">X</button>
    </div>
    <ul className="popup-menu-elements-top">
      <li>UPCOMING</li>
      <li>TOP RATED</li>
      <li>LATEST</li>
    </ul>
    <ul className="popup-menu-elements-bottom">
      <li className="my-list" type="button">
        MYLIST
      </li>
      <li className="about-us" type="button">
        ABOUT US
      </li>
    </ul>
  </div>
);

export default PopupMenu;
