// react
import React, { useEffect, useState, useContext } from "react";
// react router dom
import { useHistory } from "react-router-dom";
// images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// module
import { Line } from "rc-progress";
// services
import { createUser } from "../services/FirebaseUserFunctions";
// contexts
import { SignContext } from "../contexts/SignContext";
import { AuthContext } from "../contexts/AuthContext";
// styles
import "../styles/SignUp.scss";

const SignUp = () => {
  const history = useHistory();
  const signContext = useContext(SignContext);
  const authContext = useContext(AuthContext);
  /**
   * Password verification
   */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [securePassword, setSecurePassword] = useState(0);
  const [verifCapitals, setVerifCapitals] = useState("error");
  const [verifNumbers, setVerifNumbers] = useState("error");
  const [verifSymbols, setVerifSymbols] = useState("pass");
  const [verifLength, setVerifLength] = useState(false);
  const [verifIdentical, setVerifIdentical] = useState(false);
  const [termOfUse, setTermOfUse] = useState(false);
  const [colorBar, setColorBar] = useState("#e64141");
  const [error, setError] = useState(true);
  useEffect(() => {
    setSecurePassword(0);
    // Verif Length
    if (password.length < 6) {
      setVerifLength(false);
    } else {
      setVerifLength(true);
    }
    // verify 1+ Number
    if (!RegExp("[0-9]", "gm").test(password)) {
      setVerifNumbers("error");
    } else {
      const count = password.match(RegExp("[0-9]", "g")).length;
      if (count === 1) {
        setVerifNumbers("pass");
        setSecurePassword((nb) => nb + 1);
      } else if (count > 1) {
        setVerifNumbers("valid");
        setSecurePassword((nb) => nb + 5);
      }
    }
    // verify 1+ Capital
    if (!RegExp("[A-Z]", "gm").test(password)) {
      setVerifCapitals("error");
    } else {
      const count = password.match(RegExp("[A-Z]", "g")).length;
      if (count > 1) {
        setVerifCapitals("valid");
        setSecurePassword((nb) => nb + 5);
      } else if (count === 1) {
        setVerifCapitals("pass");
        setSecurePassword((nb) => nb + 1);
      }
    }
    // verify 0+ Symbol
    if (!RegExp("[!@#$%^&*]", "g").test(password)) {
      setVerifSymbols("pass");
    } else {
      setVerifSymbols("valid");
      setSecurePassword((nb) => nb + 5);
    }
    // verify if the 2 password are egal
    if (password !== passwordConfirm) {
      setVerifIdentical(false);
    } else if (password === passwordConfirm) {
      setVerifIdentical(true);
    }
  }, [password, passwordConfirm]);
  // Change color by password difficulty
  useEffect(() => {
    if (securePassword === 0) {
      setColorBar("#e64141");
    } else if (securePassword < 5) {
      setColorBar("#e17b2d");
    } else if (securePassword >= 5) {
      setColorBar("#82f047");
    }
  }, [securePassword]);

  /**
   * Inscription Part
   */
  const handleRegister = async (e) => {
    e.preventDefault();
    const verif = [
      verifCapitals,
      verifNumbers,
      verifSymbols,
      verifLength ? "valid" : "error",
      verifIdentical ? "valid" : "error",
      termOfUse,
    ];
    try {
      if (verif.includes("error") || verif.includes(false)) {
        setError(false);
      } else {
        const userCredential = await createUser(email, password);
        authContext.setUserID(userCredential.user.uid);
        authContext.setIsLogged(true);
        localStorage.setItem("user", userCredential.user.uid);
        localStorage.setItem("logged", true);
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        signContext.hideSignUp();
        if (signContext.redirect !== null) {
          history.push(signContext.redirect);
          signContext.setRedirect(null);
        }
      }
      return true;
    } catch (err) {
      return false;
    }
  };

  /**
   * Hide SignUp when click on button close
   */
  const handleClose = () => {
    signContext.hideSignUp();
  };

  /**
   * Hide SignUp and Show SignIn
   */
  const handleShowLoginPage = () => {
    signContext.hideSignUp();
    signContext.showSignIn();
  };

  const handleTermOfUse = (e) => {
    setTermOfUse(e.target.checked);
  };

  return (
    <div className={`signUpModal ${signContext.classShowSignUp}`}>
      <div className="container">
        <button type="button" className="btn-close" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h1>Sign Up</h1>

        <form onSubmit={handleRegister}>
          <label htmlFor="signUpEmail">
            <p>Type your email address:</p>
            <input
              type="email"
              name="email"
              id="signUpEmail"
              placeholder="exemple@domain.ext"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="signUpPasswordStep1">
            <p>Type your password:</p>
            <input
              type="password"
              name="password"
              id="signUpPasswordStep1"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="signUpPasswordStep2">
            <p>Password confirmation:</p>
            <input
              type="password"
              name="passwordConfirm"
              id="signUpPasswordStep2"
              placeholder="Confirm password ..."
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </label>
          <div className="signup-errorpassword">
            <span>
              <span className={verifLength ? "valid" : "error"}>
                <i className="icon-check" />
                <i className="icon-check-empty" />
              </span>
              More than 6 characters
            </span>
            <br />
            <span>
              <span className={verifNumbers}>
                <i className="icon-check" />
                <i className="icon-check-empty" />
              </span>
              1 or more number
            </span>
            <br />
            <span>
              <span className={verifCapitals}>
                <i className="icon-check" />
                <i className="icon-check-empty" />
              </span>
              1 or more capital letter
            </span>
            <br />
            <span>
              <span className={verifSymbols}>
                <i className="icon-check" />
                <i className="icon-check-empty" />
              </span>
              Optional symbol: <code>!@#$%^&*</code>
            </span>
            <br />
            <span>
              <span className={verifIdentical ? "valid" : "error"}>
                <i className="icon-check" />
                <i className="icon-check-empty" />
              </span>
              Same password
            </span>
            <br />
            <Line
              percent={Math.round((securePassword / 15) * 100)}
              strokeWidth="3"
              strokeColor={colorBar}
              strokeLinecap="round"
              trailWidth="3"
              trailColor="#bbb"
            />
          </div>
          <div className="cgu">
            <label htmlFor="cguCheckbox">
              <input
                type="checkbox"
                id="cguCheckbox"
                onClick={handleTermOfUse}
              />
              <a
                href="/term-of-use"
                target="_blank"
                onClick={() => {
                  window.open("/term-of-use", "popup", "width=600,height=600");
                  return false;
                }}
              >
                I&apos;m accepting the Terms of use.
              </a>
            </label>
          </div>
          <div className="container-button">
            <button
              type="button"
              className="btn-already-register"
              onClick={handleShowLoginPage}
            >
              Already have an account ? Sign in here
            </button>
            <button
              type="submit"
              className={`signUpButton ${!error ? "error" : ""}`}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
