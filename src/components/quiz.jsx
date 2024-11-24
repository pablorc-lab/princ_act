import React, { useState} from 'react'
import Quiz_preguntas from './preguntas/Preguntas';
import Final_result from './resultados/resultados';

export default function Quiz({respuesta_inmediata}){
  const [incorrectas, setIncorrectas] = useState([]);
  const [tam_preguntas, setTam_preguntas] = useState(null);

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
          setTam_preguntas={setTam_preguntas} 
          setIncorrectas={setIncorrectas} 
        />
      )}
    </>
  );
}