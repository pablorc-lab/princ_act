import React, { useState, useEffect } from 'react'
import { Link, } from 'react-router-dom';
import './preguntas.css';
import Atomo from "../../images/atomo.webp"
import Continuar from "../../images/continuar.webp"
import Gengar from "../../images/gengar.webp"
import Funko_mandragora from "../../images/funko_mandragora.webp"
import Planta from "../../images/planta_input_question.png"
import Puntos from "../../images/puntos.png"
import Enredadera from "../../images/enredaderas.png"
import Cross from "../../images/cross.webp"
import Check from "../../images/check.webp"
import Casa from "../../images/logo_home.webp"
import Thumb from "../../images/thumb_up.svg"

//	Este componente se encarga de mostrar los modos Quiz y Práctica
//	`respuesta_inmediata` controla este cambio, donde será False o True respectivamente	
export default function Quiz_preguntas({ Preguntas, setIncorrectas, setShowResult, respuesta_inmediata = false, question_size = 1, tipoDatos }) {
	const [preguntasMezcladas, setPreguntasMezcladas] = useState([]);
	const [index, setIndex] = useState(0);
	const [principio_actual, setPrincipio] = useState(null);
	const [texto, setTexto] = useState('');
	const [resultados_actuales, setResultados_act] = useState([null, null, null]);  //*[0]=principio [1]=incorrecta [2]=correcta
	const [mostrar_solucion, setMostrar_solucion] = useState(false);
	const [reviseAnswer, setResiveAnswer] = useState(false);

	//*Desordenar las preguntas al cargar el componente
	useEffect(() => {
		const preguntasAleatorias = [...Preguntas].sort(() => Math.random() - 0.5);
		setPreguntasMezcladas(preguntasAleatorias);
		setPrincipio(preguntasAleatorias[0]);

		if (!respuesta_inmediata) {
			setPreguntasMezcladas(preguntasAleatorias.slice(0, question_size))
		}
	}, [Preguntas, question_size, respuesta_inmediata, tipoDatos]);

	//*Funciones para controlar los estados
	const verificarRespuesta = () => {
		const quitarTildes = (str) => { return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); };
		const quitarEspacios = (str) => { return str.replace(/\s+/g, '').toLowerCase(); };

		// Normalizar el texto del principio
		const tipo = quitarTildes(principio_actual.tipo.toLowerCase());
		const tipo_norm = quitarTildes(quitarEspacios(principio_actual.tipo));
		const uso = quitarTildes(principio_actual.uso.toLowerCase());
		const uso_norm = quitarTildes(quitarEspacios(principio_actual.uso));

		const regex = new RegExp(`\\b(${tipo.replace('/', '|')})\\b`, 'i');

		// Normalizar el texto del usuario
		const textoUser = quitarTildes(texto.toLowerCase().trim());
		const textoUser_norm = quitarTildes(quitarEspacios(texto));

		// Si hay uso en ese principio comprobar
		const regexUso = new RegExp('\\(([^)]+)\\)');
		const hay_uso = textoUser_norm.match(regexUso);

		if (uso && hay_uso) {
			// Obtener el uso escrito por el usuario
			return (regex.test(textoUser) || (tipo_norm === textoUser_norm)) && (uso_norm === hay_uso[0].trim());
		}

		// En otro caso solo comprueba el principio
		return regex.test(textoUser) || (tipo_norm === textoUser_norm);
	}


	//* Cambiar principio
	const Cambiar_principio = () => {
		// Verificar si tiene uso añadido el principio actual
		let uso_actual = principio_actual.uso ? ` ${principio_actual.uso}` : "";

		if (!verificarRespuesta()) {
			const nuevoValores = [
				principio_actual.principio,
				texto.charAt(0).toUpperCase() + texto.slice(1),
				principio_actual.tipo.charAt(0).toUpperCase() + principio_actual.tipo.slice(1) + uso_actual,
			];

			setResultados_act(nuevoValores);

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
			setResultados_act([
				principio_actual.principio,
				null,
				principio_actual.tipo.charAt(0).toUpperCase() + principio_actual.tipo.slice(1) + uso_actual
			]);
		}

		//* Si no hay mas preguntas se finaliza
		if (index + 1 === preguntasMezcladas.length && (!respuesta_inmediata && !mostrar_solucion))
			setShowResult(true);

		setPrincipio(preguntasMezcladas[index + 1]);
		setIndex(index + 1);
		setTexto("");
	};


	//*Función para manejar la pulsación de tecla Enter
	const handleKeyPress = (event) => {
		if (event.key === "Enter" && index < preguntasMezcladas.length && (texto || mostrar_solucion)) {
			if (!respuesta_inmediata || (respuesta_inmediata && !mostrar_solucion))
				Cambiar_principio();

			if (respuesta_inmediata) {
				setMostrar_solucion(!mostrar_solucion);
				setTexto("");
			}
		}
		else if (index >= preguntasMezcladas.length)
			setShowResult(true);
	};

	//* Esta función cambia la respuesta actual como correcta.
	const handleResiveAnswer = () => {
		// Eliminar la incorrecta actual si verdaderamente está mal
		if (resultados_actuales[1]) {
			// Verificar si tiene uso añadido el principio actual
			setResultados_act((prevResultados) => {
				const updateResultados = [...prevResultados];
				updateResultados[1] = null
				return updateResultados;
			});

			setIncorrectas((prevIncorrectas) => {
				const updatedIncorrectas = [...prevIncorrectas];
				updatedIncorrectas.pop();
				return updatedIncorrectas;
			});
		}
	};

	return (
		<>
			<title>{(!respuesta_inmediata ? "Quiz " : "Practicar ")} {tipoDatos}</title>
			<div className={`App ${tipoDatos}`}>
				<Link to="/">
					<img
						src={Casa}
						alt="home logo"
						style={{
							position: 'absolute',
							left: '20px',
							top: '20px',
							width: '90px',
							cursor: 'pointer',
							opacity: '0.5',
						}}
						onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
						onMouseOut={(e) => (e.currentTarget.style.opacity = '0.5')}
					/>
				</Link>
				<img className='Gengar' src={`${tipoDatos === "principios" ? Gengar : Funko_mandragora}`} alt="gengar" />
				<img
					className={`${tipoDatos === "principios" ? "puntos" : "enredadera"}`}
					src={`${tipoDatos === "principios" ? Puntos : Enredadera}`}
					alt="Puntos"
				/>

				<section className='Papel_container'>
					{/*Solucion inmediata*/}
					{respuesta_inmediata && mostrar_solucion && (
						<div className='Papel_solt'>
							<h2>{resultados_actuales[0]}</h2>

							<article className='solutions_container'>
								<div className={resultados_actuales[1] ? 'incorrecta' : 'correcta'}>
									<img
										src={resultados_actuales[1] ? Cross : Check}
										alt={resultados_actuales[1] ? 'cross' : 'check'}
									/>
									<p>{resultados_actuales[1] || resultados_actuales[2]}</p>
								</div>
								<div className='correcta'>
									<img src={Check} alt="check" />
									<p>{resultados_actuales[2]}</p>
								</div>
							</article>

							<div className="thumb" onMouseEnter={() => setResiveAnswer(!reviseAnswer)} onMouseLeave={() => setResiveAnswer(!reviseAnswer)}>
								<img src={Thumb} alt='thunb' width="50px" onClick={handleResiveAnswer} />
								{reviseAnswer && <p>Si tu respuesta es correcta pulsa para corregir</p>}
							</div>
						</div>
					)}

					{/*Papel*/}
					{!mostrar_solucion && (
						<section className={`Papel ${tipoDatos}`}>
							<p className='contador'>
								{principio_actual ? `${index + 1} / ${preguntasMezcladas.length}` : '-/-'}
							</p>
							<h1>
								{principio_actual ? principio_actual.principio : "..."}
							</h1>
						</section>
					)}
				</section>

				<section className={`Respuesta ${tipoDatos}`} style={{ backgroundColor: mostrar_solucion && "rgba(195, 190, 237, 0.1)" }}>
					<img id="Atomo_img" src={`${tipoDatos === "principios" ? Atomo : Planta}`} alt="atomo" style={{ opacity: mostrar_solucion ? 0.3 : 1 }} />
					<input
						style={{ opacity: mostrar_solucion ? 0 : 1 }}
						type='text'
						autoFocus
						spellCheck="false"
						placeholder='Escribe su uso...'
						value={texto}
						onChange={(e) => { setTexto(e.target.value); }}
						onKeyDown={handleKeyPress}
					/>
					<img
						id="Continuar_img"
						src={Continuar}
						alt="continuar"
						onClick={() => handleKeyPress({ key: 'Enter' })}
						style={{ cursor: (texto || mostrar_solucion) ? 'pointer' : 'not-allowed', opacity: (texto || mostrar_solucion) ? 1 : 0.3 }}
					/>
				</section>
			</div>
		</>

	);
}
