import { useState } from 'react';
import { Link } from 'react-router-dom';
import Gastly from "../images/gastly.png"
import Bombilla from "../images/bombilla.png"
import { infoText } from './info_text';
import "./home.css"

export default function Home(){
  const [tip_text, setTipText] = useState(null);

  return (
    <>
      <div className='menu'>
        <div className='gastly'>
          <img src={Gastly} alt="gastly"/>
        </div>
        
        <div className='botones'>
          <Link to="/practicar">
            <button onMouseOver={()=>setTipText(infoText.practicar)} onMouseOut={()=> setTipText(null)}>Practicar principios</button>
          </Link>

          <Link to="/quiz">
            <button onMouseOver={()=>setTipText(infoText.quiz)} onMouseOut={()=>setTipText(null)}>Hacer el Quiz</button>
          </Link>        
        </div>
      </div>

      {tip_text && (
        <article className='tip'>
          <img src={Bombilla} alt="bombilla"/>
          <p>{tip_text}</p>
        </article>
      )}
    </>
  );
}