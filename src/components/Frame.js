import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma, faReact } from "@fortawesome/free-brands-svg-icons"; // Importuojame reikiamas ikonėles

import "./Frame.css";


export const Frame = () => {
  return (
    <>
     <ul className="progress">
  <li>
    <div className="circle">
      <div className="icon">
      <FontAwesomeIcon icon={faFigma} />
      </div>
    </div>
  </li>
  <li>
    <div className="circle">
      <div className="icon">
      <FontAwesomeIcon icon={faReact} />
      </div>
    </div>
  </li>
  <li>
    <div className="circle">
      <div className="text">
        <p>Ps</p>
      </div>
    </div>
  </li>
  <li>
    <div className="circle">
      <div className="text">
        <p>Ai</p>
      </div>
    </div>
  </li>
  <li>
    <div className="circle">
      <div className="text">
        <p>Id</p>
      </div>
    </div>
  </li>
  <li>
    <div className="circle">
      <div className="text">
        <p>Html</p>
      </div>
    </div>
  </li>
</ul>

    </>
  );
};