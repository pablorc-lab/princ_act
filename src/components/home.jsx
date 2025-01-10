import { useState } from 'react';
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
  const [princ_mode, setPrincMode] = useState(true);

  return (
    <>
      <section className='menu_btns'>
        <div className={`princ_act_div ${princ_mode && "show"}`} onClick={() => setPrincMode(!princ_mode)}>
          <img src={Princ_act} alt="Princ_act"/>
          <span>Principios activos</span>
        </div>
        <div className={`planta_div ${!princ_mode && "show"}`} onClick={() => setPrincMode(!princ_mode)}>
          <img src={Planta_menu} alt="Planta"/>
          <span>Fitoterapia</span>
        </div>
      </section>
      
      <section className='libro_img'>
        <h1>Apuntes ➟</h1>
        <img src={Libro} alt="libro" width="50" onClick={() => setShowData(true)} />
      </section>


      <section className='menu'>
        <div className='gastly'>
          <img src={`${princ_mode ? Gastly : Mandragora}`} alt="gastly" />
        </div>

        <div className={`botones ${!princ_mode && "plant"}`}>
          <Link to="/practicar">
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
      </section>

      {/* Mostrar tip si se hace hover en algún boton */}
      <article className={`tip ${tip_text && 'show'}`}>
          <img src={Bombilla} alt="bombilla" />
          <p>{tip_text}</p>
      </article>

      {/* Mostrar fondo borroso*/}
      {(show_data || questions_size) && (<div className="background-blur"></div>)}

      {/* Mostrar apuntes si está activado*/}
      <div className={`data_container ${show_data && 'show'}`}> 
        <Apuntes setShowData={setShowData} /> 
      </div>

      {/* Si questions_size es true, muestra el componente QuestionsSize */}
      <div className={`questions_container ${questions_size && 'show'}`}>
        <QuestionsSize setQuestionsSize={setQuestionsSize} />
      </div>
    </>
  );
}