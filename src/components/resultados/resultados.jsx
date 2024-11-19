import React, { useState } from 'react'
import "./resultados.css"
import Preguntas from "../../data/principios.json";
import Dot from "./dot.png"
import Cross from "./cross.png"
import Check from "./check.png"
import Retry from "./retry.png"

export default function Final_result({  handleFinalizarQuiz, respuestas_Incorrectas }) {
	const correctas = Preguntas.length - respuestas_Incorrectas.length;
	const nota = ((correctas / Preguntas.length) * 10).toFixed(2);

	return(
		<div className="result">
			<section className='nota_container'>
				<div className='correctas'>
					<h1>CORRECTAS</h1>
					<h2>{correctas} / {Preguntas.length}</h2>
				</div>
				<div className='nota'>
					<h1>NOTA</h1>
					<h2>{nota}</h2>
				</div>			
				<img src={Retry} onClick={handleFinalizarQuiz}/>
			</section>

			<section className='incorrectas_container'>
				<div className='incorrectas'>
					<h1>INCORRECTAS</h1>
					<h2>{respuestas_Incorrectas.length}</h2>
				</div>

				<ul className='incorrectas_text'>
        	{respuestas_Incorrectas.map((respuesta, index) => (
						<li key={index}>
							<div className='principio'>
								<img src={Dot} alt="circulo"/>
								<span>{respuesta.principio}</span>
							</div>
							
							<div className='incorrecta'>
								<img src={Cross} alt="cross"/>
								<span>{respuesta.incorrecta}</span>
							</div>
							
							<div className='correcta'>
								<img src={Check} alt="check"/>
								<span>{respuesta.correcta}</span>
							</div>
						</li>
        	))}
      	</ul>
			</section>
		</div>
	)

}