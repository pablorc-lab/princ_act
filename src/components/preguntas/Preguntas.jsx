import React, { useState, useRef, useEffect } from 'react'
import Preguntas from "../../data/principios.json";
import { Link } from 'react-router-dom'; 
import "./../resultados/resultados.css"
import './preguntas.css';

import Atomo from "../../images/atomo.png"
import Continuar from "../../images/continuar.png"
import Gengar from "../../images/gengar.webp"
import Puntos from "../../images/puntos.png"
import Dot from "../../images/dot.png"
import Cross from "../../images/cross.png"
import Check from "../../images/check.png"
import Retry from "../../images/retry.png"

export default function Quiz_preguntas({setIncorrectas, setTam_preguntas, respuesta_inmediata = false }) {
	const [preguntasMezcladas, setPreguntasMezcladas] = useState([]);
	const [index, setIndex] = useState(0);
	const [principio_actual, setPrincipio] = useState(null);
	const [texto, setTexto] = useState('');
	const inputRef = useRef(null); // Referencia para el input
	// [0]=principio [1]=incorrecta [2]=correcta
	const [valores_actuales, setValores_act] = useState([null, null, null]);
	const [mostrar_solucion, setMostrar_solucion] = useState(false);

	// Desordenar las preguntas al cargar el componente
	useEffect(() => {
		document.title = (!respuesta_inmediata ? "Quiz " : "Practicar ") + "principios activos";

		const preguntasAleatorias = [...Preguntas].sort(() => Math.random() - 0.5);
		setPreguntasMezcladas(preguntasAleatorias);
		setPrincipio(preguntasAleatorias[0]);

		if(!respuesta_inmediata){
			const cantidad = prompt(`¿Cuántas preguntas quieres que se muestren?\n${Preguntas.length} en total`);
			(cantidad > 0) 
				? setPreguntasMezcladas(preguntasAleatorias.slice(0, cantidad)) 
				: setPreguntasMezcladas(preguntasAleatorias);
		}

	}, []);

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

		if (!verificarRespuesta()) {
			const nuevoValores = [
        principio_actual.principio,
        texto.charAt(0).toUpperCase() + texto.slice(1),
        principio_actual.tipo.charAt(0).toUpperCase() + principio_actual.tipo.slice(1),
			];

			setValores_act(nuevoValores);

			setIncorrectas((prevIncorrectas) => [
				...prevIncorrectas,
				{
					principio: nuevoValores[0],
					incorrecta: nuevoValores[1],
					correcta: nuevoValores[2],
				},
			]);
		}

		else {
			setValores_act([
				principio_actual.principio,
				null,
				principio_actual.tipo.charAt(0).toUpperCase() + principio_actual.tipo.slice(1)
			]);
		}
		
		// Si no hay mas preguntas se finaliza
		if (index + 1 === preguntasMezcladas.length)
			setTam_preguntas(preguntasMezcladas.length);

		setPrincipio(preguntasMezcladas[index + 1]);
		setIndex(index + 1);
		setTexto("");
		inputRef.current.focus(); //* Enfocar automáticamente el input
	};

	// Función para manejar la pulsación de tecla Enter
	const handleKeyPress = (event) => {
		if (event.key === "Enter" && index < 45 && (texto || mostrar_solucion)) {
			if (!respuesta_inmediata || (respuesta_inmediata && !mostrar_solucion))
				Cambiar_principio();

			if (respuesta_inmediata) {
				setMostrar_solucion(!mostrar_solucion);
				setTexto("");
				inputRef.current.focus(); //* Enfocar automáticamente el input
			}
		}

		else if (index >= 45)
			setTam_preguntas(preguntasMezcladas.length);
	};


	return (
		<div className="App">
			<img className='Gengar' src={Gengar} alt="gengar" />
			<img className='Puntos' src={Puntos} alt="Puntos" />

			<div className='Papel_container'>
				{/*Solucion inmediata*/}
				{respuesta_inmediata && mostrar_solucion && (
					<div className='Papel_solt'>
						<h2>{valores_actuales[0]}</h2>

						<div className='solutions_container'>
							<div className={valores_actuales[1] ? 'incorrecta' : 'correcta'}>
								<img src={valores_actuales[1] ? Cross : Check} alt={valores_actuales[1] ? 'cross' : 'check'} />
								<p>{valores_actuales[1] || valores_actuales[2]}</p>
							</div>
							<div className='correcta'>
								<img src={Check} alt="check" />
								<p>{valores_actuales[2]}</p>
							</div>
						</div>
					</div>
				)}

				{/*Papel*/}
				{!mostrar_solucion && (
					<div className="Papel">
						<p className='contador'> 
							{principio_actual ? `${index + 1} / ${preguntasMezcladas.length}` : '-/-'}
						</p>
						<h1>
							{principio_actual ? principio_actual.principio : "..."}
						</h1>
					</div>
				)}
			</div>

			<div className='Respuesta' style={{ opacity: mostrar_solucion ? 0.1 : 1 }}>
				<img id="Atomo_img" src={Atomo} alt="atomo" />
				<input
					type='text'
					ref={inputRef}
					autoFocus
					spellCheck="false"
					placeholder='Escribe su uso...'
					value={texto}
					onChange={(e) => {setTexto(e.target.value);}}
					onKeyDown={handleKeyPress}
				/>
				<img
					id="Continuar_img"
					src={Continuar}
					alt="continuar"
					onClick={() => handleKeyPress({key: 'Enter'})} 
					style={{ cursor: texto ? 'pointer' : 'not-allowed', opacity: texto ? 1 : 0.3 }}
				/>
			</div>
		</div>
	);
}
