import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
function Nav({ SingInClassN, signUpCN, user, setUser }) {
  const Navigate = useNavigate();
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  const handleLogOut = () => {
    sessionStorage.removeItem("Auth Token");
    Navigate("/");
  };
  return (
    <div className={`nav ${show && "nav__black"} ${SingInClassN} ${signUpCN}`}>
      <div className="nav__content">
        <img
          onClick={() => (user ? Navigate("/homescreen") : Navigate("/"))}
          className="nav__logo"
          src="https://i.ibb.co/qB5cJD5/1200px-Logonetflix.png"
          alt=""
        />
        {user ? (
          <button className="signOutBtn" onClick={handleLogOut}>
            Sign Out
          </button>
        ) : (
          <button
            className="authLinks redButton"
            onClick={() => Navigate("/signin")}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

export default Nav;
