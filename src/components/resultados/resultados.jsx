import React, { useEffect, useState } from 'react'
import "./resultados.css"
import Dot from "../../images/dot.png"
import Cross from "../../images/cross.png"
import Check from "../../images/check.png"
import Retry from "../../images/retry.png"

export default function Final_result({tam_preguntas, incorrectas, handleReiniciar}) {
	const correctas = tam_preguntas - incorrectas.length;
	const nota = ((correctas / tam_preguntas) * 10).toFixed(2);

	useEffect(() => {
		document.title = "Resultados obtenidos";
	})
	
	return(
		<div className="result">
			<section className='nota_container'>
				<div className='correctas'>
					<h1>CORRECTAS</h1>
					<h2>{correctas} / {tam_preguntas}</h2>
				</div>
				<div className='nota'>
					<h1>NOTA</h1>
					<h2>{nota}</h2>
				</div>			
				<img src={Retry} onClick={handleReiniciar} />
			</section>

			<section className='incorrectas_container'>
				<div className='incorrectas'>
					<h1>INCORRECTAS</h1>
					<h2>{incorrectas.length}</h2>
				</div>

				<ul className='incorrectas_text'>
        	{incorrectas.map((respuesta, index) => (
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
	);
}