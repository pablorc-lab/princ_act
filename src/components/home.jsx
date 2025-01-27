import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { infoText } from './info_text';
import QuestionsSize from './preguntas/cantidad';
import Apuntes from './guia/apuntes';
import "./home.css";

import Princ_act from "../images/princp_menu.webp";
import Planta_menu from "../images/planta_menu.webp";
import Mandragora from "../images/mandragora.webp";
import Gastly from "../images/gastly.webp";
import Bombilla from "../images/bombilla.webp";
import Libro from "../images/libro.webp";

export default function Home() {
  const [tip_text, setTipText] = useState(null);
  const [show_data, setShowData] = useState(false);
  const [questions_size, setQuestionsSize] = useState(false);
  const [game_mode, setGameMode] = useState("principios");
  const [preguntas, setPreguntas] = useState([]);

  // Obtener el JSON del modo actual cada vez que el gamemode cambie
  useEffect(() => {
    async function fetchData() {
      try {
        // Importar el archivo JSON según el valor de dataFile
        const data = await import(`./../data/${game_mode}.json`);
        setPreguntas(data.default);
      } 
      catch (error) {
        console.error(`Error cargando el archivo ${game_mode}.json:`, error);
      }
    }
    fetchData();
  }, [game_mode]);

  return (
    <>
      <section className='menu_btns'>
        <div className={`princ_act_div ${game_mode === "principios" && "show"}`} onClick={() => setGameMode("principios")}>
          <img src={Princ_act} alt="Princ_act"/>
          <span>Principios activos</span>
        </div>
        <div className={`planta_div ${game_mode === "plantas" && "show"}`} onClick={() => setGameMode("plantas")}>
          <img src={Planta_menu} alt="Planta"/>
          <span>Fitoterapia</span>
        </div>
      </section>
      
      <section className='libro_img'>
        <h1>Apuntes ➟</h1>
        <img src={Libro} alt="libro" width="50" onClick={() => setShowData(true)} />
      </section>

      <main className='menu'>
        <div className='gastly'>
          <img src={`${game_mode === "principios" ? Gastly : Mandragora}`} alt="gastly" />
        </div>

        <div className={`botones ${game_mode}`}>
          <Link to={`/practicar/${game_mode}`}>
          <button
              onMouseOver={() => setTipText(infoText.practicar)}
              onMouseOut={() => setTipText(null)}
            >Practicar</button>
          </Link>

          <button
            onMouseOver={() => setTipText(infoText.quiz)}
            onMouseOut={() => setTipText(null)}
            onClick={() => setQuestionsSize(true)}
          > Quiz </button>
        </div>
      </main>

      {/* Mostrar tip si se hace hover en algún boton */}
      <article className={`tip ${tip_text && 'show'}`}>
          <img src={Bombilla} alt="bombilla" />
          <p>{tip_text}</p>
      </article>

      {/* Mostrar fondo borroso*/}
      {(show_data || questions_size) && (<div className="background-blur"></div>)}

      {/* Mostrar apuntes si está activado*/}
      <div className={`data_container ${show_data && 'show'}`}> 
        <Apuntes setShowData={setShowData} Preguntas={preguntas} GameMode={game_mode}/> 
      </div>

      {/* Si questions_size es true, muestra el componente QuestionsSize */}
      <div className={`questions_container ${questions_size && 'show'}`}>
        <QuestionsSize setQuestionsSize={setQuestionsSize} Preguntas={preguntas} GameMode={game_mode}/>
      </div>
    </>
  );
}