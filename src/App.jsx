import React, { useContext } from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import Hamburger from "hamburger-react";
import PopupMenu from "./containers/PopupMenu";
import Home from "./containers/Home";
import Category from "./containers/Category";
import AboutUs from "./containers/AboutUs";
import MyList from "./containers/MyList";
import Error404 from "./containers/Error404";
import BurgerContext from "./contexts/BurgerContext";

function App() {
  const burgerContext = useContext(BurgerContext);

  return (
    <>
      {/* Au click sur le burger la popupMenu apparait ou disparait peut importe la page affichée */}
      {burgerContext.displayPopupMenu && <PopupMenu />}

      <div className={burgerContext.classBurger}>
        <Hamburger
          /* toggle et toggled récupèrent l'état du burger voir readme de hamburger-react  */
          toggled={burgerContext.isOpen}
          toggle={burgerContext.setOpen}
          onToggle={() => {
            burgerContext.setDisplayPopupMenu(!burgerContext.displayPopupMenu);
          }}
        />
      </div>
      {/* Routes de navigation interpages */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/mylist" component={MyList} />
        <Route component={Error404} />
      </Switch>
    </>
  );
}

export default App;
