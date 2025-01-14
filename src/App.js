// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GradientoFonas from "./components/GradientoFonas";
import NavBar from "./components/NavBar";
import as from "./img/as.svg";
import ApieMane from "./components/ApieMane";
import { Darbai } from "./components/Darbai";
import Idarbink from "./components/Idarbink";

function App() {
  return (
    <Router>
      <div className="App">
        <GradientoFonas />
        <NavBar />
        <Routes >
          <Route path="/" element={
            <div className="hero-section">
              <div className="hero-content">
                <h1>sveiki, aš Marta</h1>
                <h2>ux/ui</h2>
                <p>pradedančioji dizainerė</p>
              </div>
              <div className="profile-image">
                <img src={as} alt="Marta Aleksandrovič" />
              </div>
            </div>
          } />
          <Route path="/work" element={<Darbai />} />
          <Route path="/about" element={<ApieMane />} />
          <Route path="/idarbink" element={<Idarbink />} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
