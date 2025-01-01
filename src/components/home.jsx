import { useState } from 'react';
import { Link } from 'react-router-dom';
import Gastly from "../images/gastly.png";
import Bombilla from "../images/bombilla.png";
import { infoText } from './info_text';
import QuestionsSize from './preguntas/cantidad';
import "./home.css";

export default function Home() {
  const [tip_text, setTipText] = useState(null);
  const [questions_size, setQuestionsSize] = useState(false); 

  return (
    <>
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

      {/* Si questions_size es true, muestra el fondo borroso y el componente QuestionsSize */}
      {questions_size && (
        <>
          <div className="background-blur"></div>
          <div className="questions-container">
            <QuestionsSize setQuestionsSize={setQuestionsSize}/>
          </div>
        </>
      )}
    </>
  );
}