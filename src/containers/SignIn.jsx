import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/SignIn.scss";

import { loginUser } from "../services/FirebaseUserFunctions";

/* Temporary Import for test */
import { SignInContext } from "../contexts/SignInContext";
import { AuthContext } from "../contexts/AuthContext";
const SignIn = () => {
  const signinContext = useContext(SignInContext);
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Inscription Part
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      if (user) {
        authContext.setUserID(user.uid);
        authContext.setIsLogged(true);
        signinContext.hideSignIn();
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    signinContext.hideSignIn();
  };
  
  return (
    <div className={`signInModal ${signinContext.classShowSignIn}`}>
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
            <button type="button" className="redirectToRegister">
              Not register ? Sign up for free here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
