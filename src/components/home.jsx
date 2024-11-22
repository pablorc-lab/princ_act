import { Link } from 'react-router-dom';
import Gastly from "../images/gastly.png"
import "./home.css"

export default function Home(){
  return (
    <div className='menu'>
      <div className='gastly'>
        <img src={Gastly} alt="gastly"/>
      </div>
      
      <div className='botones'>
        <Link to="/princ_act/practicar">
          <button>Practicar principios</button>
        </Link>

        <Link to="/princ_act/quiz">
          <button>Hacer el Quiz</button>
        </Link>        
      </div>
    </div>
  );
}