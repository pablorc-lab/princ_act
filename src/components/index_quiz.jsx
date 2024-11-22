import React, { useState} from 'react'
import Preguntas from "../data/test.json";
import Quiz_preguntas from './preguntas/Preguntas';
import Final_result from './resultados/resultados';

export default function Home_preguntas(){
  const [incorrectas, setIncorrectas] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  return (
    <>
      {!quizCompleted ? ( 
        <Quiz_preguntas 
          Preguntas={Preguntas}
          setIncorrectas={setIncorrectas} 
          setQuizCompleted={setQuizCompleted} 
        />
      ) : ( 
        <Final_result 
          tam_preguntas={Preguntas.length}
          incorrectas={incorrectas} />
      )}
    </>
  );
}