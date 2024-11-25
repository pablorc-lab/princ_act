import React, { useState} from 'react'
import Quiz_preguntas from './preguntas/Preguntas';
import Final_result from './resultados/resultados';

export default function Quiz({respuesta_inmediata=false}){
  const [incorrectas, setIncorrectas] = useState([]);
  const [tam_preguntas, setTam_preguntas] = useState(null);

  const handleReiniciar = () => {
    setIncorrectas([]);  // Limpiar respuestas incorrectas
    setTam_preguntas(null);  // Resetear el número de preguntas
  };

  return (
    <>
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