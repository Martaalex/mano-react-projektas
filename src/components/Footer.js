// src/components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"; // Importuojame CSS, kur bus stiliai
import logo from "../img/logo-light.svg";
import { Link } from "react-router-dom";
import { faSquareFacebook, faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
        <div className="footer-social-icons">
          <FontAwesomeIcon icon={faSquareFacebook} className="fa-icon" />
          <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          <FontAwesomeIcon icon={faSquareGithub} className="fa-icon" />
        </div>
        <p>© 2025 Marta Aleksandrovič. Visos teisės saugomos.</p>
      </div>
    </footer>
  );
};

export default Footer;
