import React from "react";
import "./styles/App.css";
import Home from "./Component/Home";
import Suggestion from "./Component/Suggestion";
import PopupMenu from "./Component/PopupMenu";
import Category from "./Component/Category";
import AboutUs from "./Component/AboutUs";
import MyList from "./Component/MyList";
import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import ItemModal from "./Component/ItemModal";
import Player from "./Component/Player";

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
