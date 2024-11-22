import React, { useState, useRef, useEffect} from 'react'
import Atomo from "../../images/atomo.png"
import Continuar from "../../images/continuar.png"
import Gengar from "../../images/gengar.webp"
import Puntos from "../../images/puntos.png"
import './preguntas.css';

export default function Quiz_preguntas({Preguntas, setIncorrectas, setQuizCompleted}) {
	const [preguntasMezcladas, setPreguntasMezcladas] = useState([]);
  const [index, setIndex] = useState(0);
	const [principio_actual, setPrincipio] = useState(null);
	const [texto, setTexto] = useState('');
	const inputRef = useRef(null); //* Referencia para el input

	// Desordenar las preguntas al cargar el componente
	useEffect(() => {
		const preguntasAleatorias = [...Preguntas].sort(() => Math.random() - 0.5);
		setPreguntasMezcladas(preguntasAleatorias);
		setPrincipio(preguntasAleatorias[0]);
}, []);

	// Función para manejar el cambio en el input
	const textoCambiante = (event) => {
		setTexto(event.target.value);
	}

	// Funciones para controlar los estados
	const verificarRespuesta = () => {
		const quitarTildes = (str) => { return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); };

		const tipo = quitarTildes(principio_actual.tipo.toLowerCase());
		const textoUser = quitarTildes(texto.toLowerCase().trim());
		const regex = new RegExp(`\\b(${tipo.replace('/', '|')})\\b`, 'i');

		const quitarEspacios = (str) => { return str.replace(/\s+/g, '').toLowerCase(); };

		const tipo_norm = quitarTildes(quitarEspacios(principio_actual.tipo));
		const textoUser_norm = quitarTildes(quitarEspacios(texto));

		return regex.test(textoUser) || (tipo_norm === textoUser_norm);
	}

	const Cambiar_principio = () => {
		if(!verificarRespuesta()){
			//* Se coge todos los valores y se añade el nuevo
			setIncorrectas((prevIncorrectas) => [
				...prevIncorrectas,
				{
					principio: principio_actual.principio,
					incorrecta: texto.charAt(0).toUpperCase() + texto.slice(1),
					correcta: principio_actual.tipo.charAt(0).toUpperCase() + principio_actual.tipo.slice(1),
				},
			]);		
		}

		// Si no hay mas preguntas se finaliza
		if(index + 1 === preguntasMezcladas.length)
			setQuizCompleted(true);

		setPrincipio(preguntasMezcladas[index + 1]);
		setIndex(index + 1);
		setTexto("");
		inputRef.current.focus(); //* Enfocar automáticamente el input
	}

	//* Función para manejar la pulsación de tecla Enter
	const handleKeyPress = (event) => {
		if (event.key === 'Enter' && texto && index < 45) 
			Cambiar_principio(); //* Cambia de pregunta si se presiona Enter

		else if(index >= 45)
			setQuizCompleted(true);
	};

	return (
		<div className="App">
			<img className='Gengar' src={Gengar} alt="gengar"/>
			<img className='Puntos' src={Puntos} alt="Puntos"/>

			<div className="Papel">
				<p className='contador'>{index+1} / {preguntasMezcladas.length}</p>
				<h1>{principio_actual ? principio_actual.principio : "..."}</h1>
				</div>

			<div className='Respuesta'>
				<img id="Atomo_img" src={Atomo} alt="atomo" />
				<input
					type='text'
					ref={inputRef} 
					autoFocus
					spellCheck="false"
					placeholder='Escribe su uso...'
					value={texto}
					onChange={textoCambiante}
					onKeyDown={handleKeyPress} 
				/>
				<img
					id="Continuar_img"
					src={Continuar}
					alt="continuar"
					onClick={() => texto && Cambiar_principio()} 
					style={{ cursor: texto ? 'pointer' : 'not-allowed', opacity: texto ? 1 : 0.3 }}
				/>
			</div>
		</div>
	);
}
