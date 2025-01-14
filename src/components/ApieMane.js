import React from "react";
import { Frame } from "./Frame"; // Ensure the path is correct
import "./ApieMane.css";
import Footer from "./Footer";  // Importuojame Footer komponentą

function ApieMane() {
  return (
    <div className="apie-mane">
        <div className="remas">
      <h2>Marta Aleksandrovič</h2>
      <p>
        3x studentė<br />
        2x gyveno užsienyje<br />
        10+ darbuoviečių<br />
        turi 1 kurso baigimo diplomą ir užsidiėgimą darant tai kas patinka<br />
        su tikslu gauti multimedijos bakalaurą<br />
        atvira naujiems darbo pasiūlymams<br />
        pasiruošusi prisidėti prie jūsų projektų su kūrybine energija ir atsakingumu.
      </p>
      </div>
      <div className="remas">
      <h2>Trūmpai apie mane</h2>
      <p>
        esu vgtu iii kurso Multimedijos ir kompiuterinio dizaino studentė.<br />
        kūryba ir technologijos – tai mano kelias į nuolatinį tobulėjimą.
      </p>
      </div>
      <div className="remas">
      <h2>Mano tikslas</h2>
      <p>
        siekiu praktikoje pritaikyti studijų metu įgytas dizaino ir kūrybinių technologijų žinias.<br />
        esu pasirengusi dirbti, mokytis ir augti.
      </p>
      </div>
      <div className="skills-section">
        <h2>Įgūdžiai</h2>

       <Frame />
      </div>
      <Footer />
    </div>
  );
}

export default ApieMane;