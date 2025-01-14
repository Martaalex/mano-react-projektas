import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../img/logo-light.svg";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <ul className="navbar-links">
        <li><Link to="/work">Darbai</Link></li>
        <li><Link to="/about">Apie</Link></li>
        <li><Link to="/idarbink">Įdarbink</Link></li>

      </ul>
    </nav>
  );
}

export default NavBar;