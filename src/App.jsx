import React, { useState, useContext } from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import Hamburger from "hamburger-react";
import PopupMenu from "./containers/PopupMenu";
import Home from "./containers/Home";
import Category from "./containers/Category";
import AboutUs from "./containers/AboutUs";
import MyList from "./containers/MyList";

import BurgerContext from "./contexts/BurgerContext";

function App() {
  // states
  const [displayPopupMenu, setDisplayPopupMenu] = useState(false);
  const burgerContext = useContext(BurgerContext);

  return (
    <>
      {/* Au click sur le burger la popupMenu apparait ou disparait peut importe la page affichée */}
      {displayPopupMenu && <PopupMenu />}

      <div className={burgerContext.classBurger}>
        <Hamburger onToggle={() => setDisplayPopupMenu(!displayPopupMenu)} />
      </div>

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
