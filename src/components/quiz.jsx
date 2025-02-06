import React, { useState, useEffect, lazy, Suspense} from 'react'
import { useLocation, useParams  } from 'react-router-dom'; 

const Quiz_preguntas = lazy(() => import('./preguntas/Preguntas'));
const Final_result = lazy(() => import('./resultados/resultados'));

// Componente general para mostrar las preguntas de un modo u otro (respuesta_inmediata)
// Cuando `show_result` sea True, será porque se ha llegado al final y se muestra los resultados
export default function Quiz({respuesta_inmediata=false}){
  const { type } = useParams(); // Accede al tipo del enlace
  const [Preguntas, setPreguntas] = useState([]);
  const [incorrectas, setIncorrectas] = useState([]);
  const [show_result, setShowResult] = useState(false);
  const location = useLocation();
  const { cantidad_preguntas } = location.state || {}; 
  const tam_preguntas = cantidad_preguntas ? cantidad_preguntas : Preguntas.length;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await import(`../data/${type}.json`);
        setPreguntas(data.default); 
      } catch (error) {
        console.error("Error cargando el archivo JSON para Quiz:", error);
      }
    }

    fetchData();
  }, [type]); // Ejecutar cada vez que 'type' cambia

  const handleReiniciar = () => {
    setIncorrectas([]);  // Limpiar respuestas incorrectas
    setShowResult(false);  // Resetear el número de preguntas
  };

  return (
    <Suspense fallback={<h1 style={{ textAlign: "center" }}>Cargando {show_result ? "resultados" : "preguntas"}...</h1>}>     
    {/**Si `tam_preguntas` es distinto de null, será porque se ha llegado al final*/}
      {!show_result ? ( 
        <Quiz_preguntas 
          Preguntas={Preguntas}
          setIncorrectas={setIncorrectas} 
          setShowResult={setShowResult} 
          respuesta_inmediata = {respuesta_inmediata}
          question_size = {cantidad_preguntas}
          tipoDatos = {type}
        />
      ) : ( 
        <Final_result 
          tam_preguntas={tam_preguntas}
          incorrectas={incorrectas} 
          handleReiniciar={handleReiniciar}  // Pasar función para reiniciar 
        />
      )}
    </Suspense>
  );
}