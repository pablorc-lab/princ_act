import Preguntas from "./../../data/principios.json"
import Cross from "../../images/cross_fill.png"
import "./apuntes.css"

export default function Apuntes({setShowData}) {
    return (
        <section className="apuntes_container">
            <img 
                 id="cross_img" 
                src={Cross} 
                alt="cross" 
                width="40"
                onClick={() => {setShowData(false)}}
            />
            <h1>{Preguntas.length} principios activos </h1>
            
            <ul className="apuntes_list">
                {Preguntas.map((principio, index) => (
                    <li key={index}>
                        <h2> {index+1}. {principio.principio}</h2>
                        <p>{principio.tipo.charAt(0).toUpperCase() + principio.tipo.slice(1)} {principio.uso}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}