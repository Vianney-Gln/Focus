// react
import React, { useContext, useState } from "react";
// react router dom
import { useHistory } from "react-router-dom";
// images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// services
import { loginUser } from "../services/FirebaseUserFunctions";
// contexts
import { SignContext } from "../contexts/SignContext";
import { AuthContext } from "../contexts/AuthContext";
// styles
import "../styles/SignIn.scss";

const SignIn = () => {
  const history = useHistory();
  const signContext = useContext(SignContext);
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Inscription Part
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await loginUser(email, password);
      if (userCredential) {
        authContext.setUserID(userCredential.user.uid);
        authContext.setIsLogged(true);
        localStorage.setItem("user", userCredential.user.uid);
        localStorage.setItem("logged", true);
        setEmail("");
        setPassword("");
        signContext.hideSignIn();
        if (signContext.redirect !== null) {
          history.push(signContext.redirect);
          signContext.setRedirect(null);
        }
      } else {
        setEmail("");
        setPassword("");
        // Message pas cool
      }
    } catch (error) {
      return false;
    }
  };

  /**
   * Hide SignIn on click
   */
  const handleClose = () => {
    signContext.hideSignIn();
  };

  /**
   * Hide SignIn and Show SignUp
   */
  const handleShowRegisterPage = () => {
    signContext.hideSignIn();
    signContext.showSignUp();
  };

  return (
    <div className={`signInModal ${signContext.classShowSignIn}`}>
      <div className="container">
        <button type="button" className="btn-close" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h1>Sign In</h1>

        <form onSubmit={handleLogin}>
          <label htmlFor="signInEmail">
            <p>Type your email address:</p>
            <input
              type="email"
              name="email"
              id="signInEmail"
              placeholder="exemple@domain.ext"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="signInPassword">
            <p>Type your password:</p>
            <input
              type="password"
              name="password"
              id="signInPassword"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="btn-container">
            <button type="submit" className="signInButton">
              Sign In
            </button>
            <button
              type="button"
              className="redirectToRegister"
              onClick={handleShowRegisterPage}
            >
              Not register ? Sign up for free here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
