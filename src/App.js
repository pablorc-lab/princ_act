import './App.css';
import React, { useState } from 'react'
import Quiz_preguntas from "./components/preguntas/Preguntas"
import Final_result from './components/resultados/resultados';

function App() {
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respuestas_Incorrectas, setRespuestas_Incorrectas] = useState([]); 

  const handleFinalizarQuiz = () => {
    if(mostrarResultado)
      setRespuestas_Incorrectas([]);

    setMostrarResultado(!mostrarResultado);    
  };

  return (
    <>
      {mostrarResultado ?  
        (<Final_result 
          handleFinalizarQuiz={handleFinalizarQuiz}
          respuestas_Incorrectas={respuestas_Incorrectas}/>) 
        : 
        (<Quiz_preguntas 
          handleFinalizarQuiz={handleFinalizarQuiz}
          setRespuestas_Incorrectas={setRespuestas_Incorrectas}
        />)
      }
    </>
  );
}

export default App;
