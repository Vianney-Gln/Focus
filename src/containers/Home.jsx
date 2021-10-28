import React from "react";
import Logo from "../Components/Logo";
import NavHome from "../Components/NavHome";
import MyList from "../Components/MyList";
import SearchBar from "../Components/SearchBar";
import ButtonSignIn from "../Components/ButtonSignIn";
import SwitchMtoS from "../Components/SwitchMtoS";
import "../styles/index.css";
import "../styles/Home.css";

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
