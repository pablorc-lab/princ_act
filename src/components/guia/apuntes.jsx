import Preguntas from "./../../data/principios.json"
import "./apuntes.css"

export default function Apuntes() {
    return (
        <div className="apuntes_container">
            <h1>Principios activos  (Apuntes)</h1>
            <ul className="apuntes_list">
                {Preguntas.map((principio, index) => (
                    <li key={index}>
                        <h2>{principio.principio}</h2>
                        <p>{principio.tipo.charAt(0).toUpperCase()+principio.tipo.slice(1)} {principio.uso}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}