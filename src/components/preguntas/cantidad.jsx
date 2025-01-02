import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./cantidad.css"
import Cancel from "../../images/menu_cross.png"
import Advance from "../../images/menu_check.png"
import Preguntas from "../../data/principios.json"
import Quiz from '../quiz';

export default function QuestionsSize ({setQuestionsSize}){
    const [validSize, setValidSize] = useState(false);
	const [number, setNumber] = useState('');
    const navigate = useNavigate(); 
    const inputRef = useRef(null); 

    // Poner el foco en el input cuando el componente se renderiza
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Colocar el foco en el input
        }
    }, []); 

    const handleInputChange = (e) => {
        const value = e.target.value;
        setNumber(value);

        const valor_correcto = (value > 0) && (value <= Preguntas.length)
        setValidSize(valor_correcto);
    }
    
    // Manejar el pulsado de la tecla Enter
    const handleKeyPress = (event) => {
		if (event.key === "Enter" && validSize) 
            navigate('/quiz', { state: { cantidad_preguntas: number } });
	};

    return (
        <article className="cantidad_container">
            <h2>¿Cuantas preguntas quieres que se muestren?</h2>
            
            <div className="input_container">
                <input 
                    type="number"
                    value={number}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    autoFocus
                />
                <p> / {Preguntas.length}</p>
            </div>

            <div className="cantidad_images">
                <img src={Cancel} id="cancel_img" onClick={() => setQuestionsSize(false)}/>
                <img 
                    src={Advance} 
                    className={validSize ? "check_allow" : "check_deny"}
                    onClick={() => validSize && navigate('/quiz', { state: { cantidad_preguntas: number } })}
                 />
            </div>
        </article>
    )
}