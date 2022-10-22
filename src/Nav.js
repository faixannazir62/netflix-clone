import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav({ SingInClassN }) {
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

  return (
    <div className={`nav ${show && "nav__black"} ${SingInClassN}`}>
      <div className="nav__content">
        <img
          onClick={() => Navigate("/")}
          className="nav__logo"
          src="https://i.ibb.co/qB5cJD5/1200px-Logonetflix.png"
          alt=""
        />
        <button
          className="authLinks redButton"
          onClick={() => Navigate("/signin")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Nav;
