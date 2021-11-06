import React from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
// import PopupMenu from "./containers/PopupMenu";
import Home from "./containers/Home";
import Category from "./containers/Category";
import AboutUs from "./containers/AboutUs";
import MyList from "./containers/MyList";

function App() {
  return (
    <>
      {/* <PopupMenu /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/mylist" component={MyList} />
      </Switch>
    </>
  );
}

export default App;
