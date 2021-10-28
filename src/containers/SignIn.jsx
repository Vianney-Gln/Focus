import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/SignIn.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signInModal">
      <div className="container">
        <button type="button" className="btn-close">
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h1>Sign In</h1>

        <form>
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
          <button type="submit" className="signInButton">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
