import React from "react";
import "./Darbai.css";
import img1 from "../img/RiK1.svg";
import img2 from "../img/RiK2.svg";


export const Darbai = () => {
  return (
    <div className="main-content">
      <div className="single-project">
        <h2>Mano projektas</h2>
        <div className="project-card">
          <h3>Rink ir Keliauk</h3>
          <img src={img1} alt=" " />
          <p>
            „Rink ir Keliauk“ – tai interaktyvus mobiliosios programėlės
            prototipas, sukurtas naudojant Figma programa.
          </p>
          <img src={img2} alt=" " />
          <a
            href="https://www.figma.com/proto/nG8opvvUxxZWmNB2TjPyu8/rink-ir-keliauk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peržiūrėti projektą
          </a>
        </div>
      </div>
    </div>
  );
};
