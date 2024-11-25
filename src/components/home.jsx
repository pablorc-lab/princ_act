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
        <Link to="/practicar">
          <button>Practicar principios</button>
        </Link>

        <Link to="/quiz">
          <button>Hacer el Quiz</button>
        </Link>        
      </div>
    </div>
  );
}