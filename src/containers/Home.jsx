import React from "react";
import Logo from "../components/Logo";
import NavHome from "../components/NavHome";
import MyList from "../components/MyList";
import SearchBar from "../components/SearchBar";
import ButtonSignIn from "../components/ButtonSignIn";
import SwitchMtoS from "../components/SwitchMtoS";
import "../styles/index.css";

const Home = () => (
  <div>
    <header className="navBar">
      <Logo />
      <SearchBar />
      <MyList />
      <ButtonSignIn />
      <div className="fakeBurger" />
    </header>

    <div className="mainHome">
      <NavHome />
      <div className="switchHome">
        <SwitchMtoS />
      </div>
    </div>
  </div>
);

export default Home;
