import React from "react";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";

import SearchBar from "../components/SearchBar";
import Logo from "../components/Logo";
import "../styles/index.css";
import "../styles/suggestion.css";
import Slideshow from "../components/Caroussel";
import InfoSug from "../components/InfoSug";
import BackgroundImage from "../components/BackgroundImage";
import AddtoMyList from "../components/AddtoMyList";
import AvailableOn from "../components/AvailableOn";

const Suggestion = () => (
  <div>
    <BackgroundImage />
    <header className="navBar">
      <Logo />
      <SearchBar />

      <div className="fakeBurger" />
    </header>
    <div className="redirectcat">
      <h3>Go to Latest →</h3>
    </div>
    <div className="suggestionInfocarou">
      <section className="caroussel">
        <Slideshow />
      </section>
      <div>
        <InfoSug />
        <div className="infobas">
          <div className="star">
            <Rate />
          </div>
          <AddtoMyList />
          <AvailableOn />
        </div>
      </div>
    </div>
  </div>
);

export default Suggestion;
