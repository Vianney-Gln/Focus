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
import { onAuth } from "./services/FirebaseUserFunctions";

function App() {
  const burgerContext = useContext(BurgerContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    try {
      if (!authContext.isLogged) {
        onAuth((user) => {
          if (user) {
            authContext.setUserID(user.uid);
            authContext.setIsLogged(true);
          }
        });
      }
      return true;
    } catch (err) {
      return console.log(err);
    }
  }, []);

  return (
    <>
      {/* Au click sur le burger la popupMenu apparait ou disparait peut importe la page affichée */}
      {burgerContext.displayPopupMenu && <PopupMenu />}

      {/* At click on SignIn or similar, show SignIn component */}
      <SignIn />
      <SignUp />

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
        {/* BackgroundProvider vient prendre des infos pour maj du background sur category.jsx */}

        <Route exact path="/" component={Home} />
        <Route exact path="/category/:cat" component={Category} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/mylist" component={MyList} />
        <Route component={Error404} />
      </Switch>
      <ItemModal />
    </>
  );
}

export default App;
