import React, { useState} from 'react'
import Preguntas from "../data/principios.json";
import Quiz_preguntas from './preguntas/Preguntas';
import Final_result from './resultados/resultados';

export default function Quiz({respuesta_inmediata}){
  const [incorrectas, setIncorrectas] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  return (
    <>
      {!quizCompleted ? ( 
        <Quiz_preguntas 
          Preguntas={Preguntas}
          setIncorrectas={setIncorrectas} 
          setQuizCompleted={setQuizCompleted} 
          respuesta_inmediata = {respuesta_inmediata}
        />
      ) : ( 
        <Final_result 
          tam_preguntas={Preguntas.length}
          incorrectas={incorrectas} />
      )}
    </>
  );
}