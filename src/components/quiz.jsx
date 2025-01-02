import React, { useState} from 'react'
import { useLocation } from 'react-router-dom'; 
import Quiz_preguntas from './preguntas/Preguntas';
import Final_result from './resultados/resultados';
import Preguntas from "../data/principios.json"

// Componente general para mostrar las preguntas de un modo u otro (respuesta_inmediata)
// Cuando `show_result` sea True, será porque se ha llegado al final y se muestra los resultados
export default function Quiz({respuesta_inmediata=false}){
  const [incorrectas, setIncorrectas] = useState([]);
  const [show_result, setShowResult] = useState(false);
  const location = useLocation();
  const { cantidad_preguntas } = location.state || {}; 
  const tam_preguntas = cantidad_preguntas ? cantidad_preguntas : Preguntas.length;

  const handleReiniciar = () => {
    setIncorrectas([]);  // Limpiar respuestas incorrectas
    setShowResult(false);  // Resetear el número de preguntas
  };

  return (
    <>
      {/**Si `tam_preguntas` es distinto de null, será porque se ha llegado al final*/}
      {!show_result ? ( 
        <Quiz_preguntas 
          Preguntas={Preguntas}
          setIncorrectas={setIncorrectas} 
          setShowResult={setShowResult} 
          respuesta_inmediata = {respuesta_inmediata}
          question_size = {cantidad_preguntas}
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