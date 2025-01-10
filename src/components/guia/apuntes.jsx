import React, { useEffect, useState } from "react";
import Cross from "../../images/cross_fill.webp"
import "./apuntes.css"

export default function Apuntes({ setShowData, dataFile = "principios" }) {
  const [Preguntas, setPreguntas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Importa el archivo JSON según el valor de dataFile
        const data = await import(`./../../data/${dataFile}.json`);
        setPreguntas(data.default);
      } 
      catch (error) {
        console.error("Error loading JSON file:", error);
      }
    }

    fetchData();
  }, [dataFile]);

  return (
    <section className="apuntes_container">
      <img
        id="cross_img"
        src={Cross}
        alt="cross"
        width="40"
        onClick={() => { setShowData(false) }}
      />
      <h1>{Preguntas.length} {dataFile}</h1>

      <ul className="apuntes_list">
        {Preguntas.map((principio, index) => (
          <li key={index}>
            <h2> {index + 1}. {principio.principio}</h2>
            <p>{principio.tipo.charAt(0).toUpperCase() + principio.tipo.slice(1)} {principio.uso}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}