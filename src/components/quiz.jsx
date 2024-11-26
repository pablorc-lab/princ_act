import React, { useState} from 'react'
import { Link } from 'react-router-dom'; 
import Quiz_preguntas from './preguntas/Preguntas';
import Final_result from './resultados/resultados';
import Casa from "../images/logo_home.png"

export default function Quiz({respuesta_inmediata=false}){
  const [incorrectas, setIncorrectas] = useState([]);
  const [tam_preguntas, setTam_preguntas] = useState(null);

  const handleReiniciar = () => {
    setIncorrectas([]);  // Limpiar respuestas incorrectas
    setTam_preguntas(null);  // Resetear el número de preguntas
  };

  return (
    <>
    	<Link to="/">
        <img
          src={Casa}
          alt="home logo"
          style={{
            position: 'absolute',
            left: '20px',
            top: '20px',
            width: '80px',
            cursor: 'pointer',
            opacity: '0.7',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '0.5')}
        />
      </Link>

      {!tam_preguntas ? ( 
        <Quiz_preguntas 
          setIncorrectas={setIncorrectas} 
          setTam_preguntas={setTam_preguntas} 
          respuesta_inmediata = {respuesta_inmediata}
        />
      ) : ( 
        <Final_result 
          tam_preguntas={tam_preguntas}
          incorrectas={incorrectas} 
          handleReiniciar={handleReiniciar}  // Pasar función para reiniciar 
        />
      )}
    </>
  );
}