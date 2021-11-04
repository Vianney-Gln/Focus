import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Category from "../containers/Category";
import AboutUs from "../containers/AboutUs";
import MyList from "../containers/MyList";
import PopupMenu from "../containers/PopupMenu";

function Routes() {
  return (
    <>
      <PopupMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/mylist" component={MyList} />
      </Switch>
    </>
  );
}

export default Routes;
