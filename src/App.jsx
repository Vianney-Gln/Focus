import React, { useContext, useEffect } from "react";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import Hamburger from "hamburger-react";
import PopupMenu from "./containers/PopupMenu";
import Home from "./containers/Home";
import Category from "./containers/Category";
import AboutUs from "./containers/AboutUs";
import MyList from "./containers/MyList";
import Error404 from "./containers/Error404";
import ItemModal from "./containers/ItemModal";
import BurgerContext from "./contexts/BurgerContext";
/* Temporary Import for test */
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import { AuthContext } from "./contexts/AuthContext";
import { getLoggedUser } from "./services/FirebaseUserFunctions";

function App() {
  const burgerContext = useContext(BurgerContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        if (authContext.isLogged) return null;
        const userCredentials = await getLoggedUser();
        if (userCredentials) {
          authContext.setUserID(userCredentials.uid);
          return authContext.setIsLogged(true);
        }
        return null;
      } catch (err) {
        return console.log(err);
      }
    })();
  }, []);

  return (
    <>
      {/* Au click sur le burger la popupMenu apparait ou disparait peut importe la page affichée */}
      {burgerContext.displayPopupMenu && <PopupMenu />}

      {/* At click on SignIn or similar, show SignIn component */}
      <SignIn />

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
        {/* Temporary Route START */}
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        {/* <Route exact path="/logout" component={SignUp} /> */}
        {/* Temporary Route END */}
        <Route component={Error404} />
      </Switch>
      <ItemModal />
    </>
  );
}

export default App;
