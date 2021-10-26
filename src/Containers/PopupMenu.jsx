import React from "react";
import "../styles/popupMenu.css";

const PopupMenu = () => (
  <div className="popup-menu-button">
    <div className="cross-close">
      <button type="button">X</button>
    </div>
    <div className="popup-menu-button-top">
      <button type="button">UPCOMING</button>
      <button type="button">TOP RATED</button>
      <button type="button">LATES</button>
    </div>
    <div className="popup-menu-button-bottom">
      <button className="my-list" type="button">
        MYLIST
      </button>
      <button className="about-us" type="button">
        ABOUT US
      </button>
    </div>
  </div>
);

export default PopupMenu;
