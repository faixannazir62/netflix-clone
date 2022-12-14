import React, { useState } from "react";
import Nav from "../Nav";
import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInForm } from "./FormValidation";
import { app } from "../screens/FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function SingIn({ setUser }) {
  const Navigate = useNavigate();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const authentication = getAuth(app);
  const initialValues = {
    username: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInForm,
      onSubmit: (values) => {
        signInWithEmailAndPassword(
          authentication,
          values.username,
          values.password
        )
          .then((response) => {
            setError(false);
            setUser(true);
            sessionStorage.setItem(
              "Auth Token",
              response._tokenResponse.refreshToken
            );
            Navigate("/homescreen");
          })
          .catch((errors) => {
            if (errors.code === "auth/wrong-password") {
              setErrorMsg("Password is incorrect!");
            }
            if (errors.code === "auth/user-not-found") {
              setErrorMsg("Email id is invalid!");
            }
            setError(true);
          });
      },
    });
  return (
    <div className="signin-box">
      <Nav SingInClassN={"display-none"} />
      <div className="signin-innerbox">
        <form onSubmit={handleSubmit}>
          {error ? (
            <p className="signInErrorMsg">
              <span class="material-symbols-outlined danger">warning</span>
              {errorMsg}
            </p>
          ) : null}
          <div className="signin-form-innerBox">
            <div className="signinText">
              <h1>Sign In</h1>
            </div>
            <div className="username-box">
              <input
                className="Inputfields"
                type="text"
                name="username"
                placeholder="Email or phone number"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p className="error-msg">{errors.username}</p>
              ) : null}
            </div>
            <div className="pssd-box">
              <input
                className="Inputfields"
                type="password"
                name="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="error-msg">{errors.password}</p>
              ) : null}
            </div>
            <button className="submitBtn" type="submit">
              sign In
            </button>
            <div className="checkbox">
              <input type="checkbox" />
              <label className="checkbox">Remember me</label>
            </div>
            <div className="space"></div>
            <div className="signUpLink-box">
              <div class="login-signup-now" data-uia="login-signup-now">
                New to Netflix?
                <a
                  class="link"
                  target="_self"
                  onClick={() => Navigate("/")}
                  href="/"
                >
                  Sign up now.
                </a>
              </div>
              <div
                class="recaptcha-terms-of-use"
                data-uia="recaptcha-terms-of-use"
              >
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a class="link" target="_self" href="#">
                  Learn more.
                </a>
              </div>
            </div>
          </div>
        </form>
        ``
      </div>
    </div>
  );
}

export default SingIn;
