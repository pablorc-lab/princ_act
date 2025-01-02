import { useState } from 'react';
import { Link } from 'react-router-dom';
import Gastly from "../images/gastly.png";
import Bombilla from "../images/bombilla.png";
import Libro from "../images/libro.png";
import { infoText } from './info_text';
import QuestionsSize from './preguntas/cantidad';
import Apuntes from './guia/apuntes';
import "./home.css";

export default function Home() {
  const [tip_text, setTipText] = useState(null);
  const [show_data, setShowData] = useState(false);
  const [questions_size, setQuestionsSize] = useState(false); 

  return (
    <>
      <div className='libro_img'>
        <h1>Apuntes ➟</h1>
        <img src={Libro} alt="libro" width="50"  onClick={() => setShowData(true)}/>
    </div>
     

      <div className='menu'>
        <div className='gastly'>
          <img src={Gastly} alt="gastly" />
        </div>

        <div className='botones'>
          <Link to="/practicar">
            <button 
              onMouseOver={() => setTipText(infoText.practicar)} 
              onMouseOut={() => setTipText(null)}
            >Practicar principios </button>
          </Link>

          <button 
            onMouseOver={() => setTipText(infoText.quiz)} 
            onMouseOut={() => setTipText(null)}
            onClick={() => setQuestionsSize(true)} 
          > Hacer el Quiz </button>
        </div>
      </div>

      {/* Mostrar tip si se hace hover en algún boton */}
      {tip_text && (
        <article className='tip'>
          <img src={Bombilla} alt="bombilla" />
          <p>{tip_text}</p>
        </article>
      )}

      {/* Mostrar fondo borroso*/}
      {(show_data||questions_size) && (<div className="background-blur"></div>)}
      
      {/* Mostrar apuntes si está activado*/}
      {show_data && (
        <div className="data_container"> <Apuntes setShowData={setShowData}/> </div>
      )}
      
      {/* Si questions_size es true, muestra el componente QuestionsSize */}
      {questions_size && (
        <div className="questions_container">
          <QuestionsSize setQuestionsSize={setQuestionsSize}/>
        </div>
      )}
    </>
  );
}