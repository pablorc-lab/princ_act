import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'; 
import "./resultados.css"
import Dot from "../../images/dot.webp"
import Cross from "../../images/cross.webp"
import Check from "../../images/check.webp"
import Retry from "../../images/retry.webp"
import Casa from "../../images/logo_home.webp"

export default function Final_result({ tam_preguntas, incorrectas, handleReiniciar }) {
	const correctas = tam_preguntas - incorrectas.length;
	const nota = ((correctas / tam_preguntas) * 10).toFixed(2);

	useEffect(() => {
		document.title = "Resultados obtenidos";
	})

	return (
		
		<div className="result">
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
						filter: 'invert(1)'
					}}
					onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
					onMouseOut={(e) => (e.currentTarget.style.opacity = '0.5')}
				/>
			</Link>

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
								<img src={Dot} alt="circulo" />
								<span>{respuesta.principio}</span>
							</div>

							<div className='incorrecta'>
								<img src={Cross} alt="cross" />
								<span>{respuesta.incorrecta}</span>
							</div>

							<div className='correcta'>
								<img src={Check} alt="check" />
								<span>{respuesta.correcta}</span>
							</div>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}