import React from "react";
import "./styles/App.css";
import Home from "./Containers/Home";
import Suggestion from "./Containers/Suggestion";
import PopupMenu from "./Containers/PopupMenu";
import Category from "./Containers/Category";
import AboutUs from "./Containers/AboutUs";
import MyList from "./Containers/MyList";
import SignUp from "./Containers/SignUp";
import SignIn from "./Containers/SignIn";
import ItemModal from "./Containers/ItemModal";
import Player from "./Containers/Player";
import "./styles/index.css";

function App() {
  return (
    <div>
      <Home />
      <Suggestion />
      <PopupMenu />
      <Category />
      <AboutUs />
      <MyList />
      <SignUp />
      <SignIn />
      <ItemModal />
      <Player />
    </div>
  );
}

export default App;
