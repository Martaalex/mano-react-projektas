
import "./Idarbink.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


function Idarbink() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); // Nustatome, kad forma pateikta
  };

useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate("#"); // Automatiškai grįžta į pradinį puslapį
      }, 10000); // 3 sekundžių laukimas

      return () => clearTimeout(timer); // Išvalome laikmatį
    }
  }, [submitted, navigate]);

  return (
    <div className="contact-form-container">
      {submitted ? (
        <div className="aciu">
          <div className="raides">
            <span className="r">A</span>
            <span className="r">Č</span>
            <span className="r">I</span>
            <span className="r">Ū</span>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1>PARAŠYK MAN!</h1>
          <label>
            TAVO VARDAS?
            <input type="text" name="name" placeholder="Įveskite savo vardą" required />
          </label>
          <label>
            JŪSŲ EL.PAŠTAS?
            <input type="email" name="email" placeholder="Įveskite savo el.paštą" required />
          </label>
          <label>
            JŪSŲ TELEFONO NUMERIS?
            <input type="tel" name="phone" placeholder="Įveskite savo telefono numerį" />
          </label>
          <label>
            JŪSŲ ŽINUTĖ
            <textarea name="message" placeholder="Parašykite savo žinutę" required></textarea>
          </label>
          <button type="#">SIŲSTI</button>
        </form>
      )}
    </div>
  );
}

export default Idarbink;
