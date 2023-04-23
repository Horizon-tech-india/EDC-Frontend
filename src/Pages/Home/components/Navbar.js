import React, { useState } from "react";
import "../styles/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import parulLogo from "../../../assets/parul-logo.svg";

const Navigation = ({ loggedIn, setLoggedIn }) => {
  const [colorChange, setColorchange] = useState(false);
  const navigate = useNavigate();

  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a").forEach((link) => {
    if (link.href.includes({ activePage })) {
      link.classList.add("current");
    }
  });

  const changeNavbarColor = () => {
    if (window.scrollY >= 400) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleLogin = () => {
    if (loggedIn) {
      localStorage.removeItem("pu-edc-email");
      localStorage.removeItem("pu-edc-auth-token");
      setLoggedIn(false);
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className={colorChange ? "navbar colorChange" : "navbar"}>
      <img className="navbar__logo" src={parulLogo} alt="" />
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/home" className="main-nav">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/application" className="main-nav">
            Application Status
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/document" className="main-nav">
            Document
          </NavLink>
        </li>
        <li className="nav-item">
          <button onClick={handleLogin} className="main-nav">
            {loggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
