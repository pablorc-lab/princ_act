import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./cantidad.css"
import Cancel from "../../images/menu_cross.webp"
import Advance from "../../images/menu_check.webp"

export default function QuestionsSize({ setQuestionsSize, Preguntas, GameMode}) {
  const [validSize, setValidSize] = useState(false);
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNumber(value);
    const valor_correcto = (value > 0) && (value <= Preguntas.length)
    setValidSize(valor_correcto);
  }

  // Manejar el pulsado de la tecla Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && validSize)
      navigate(`/quiz/${GameMode}`, { state: { cantidad_preguntas: number } });
  };

  const handleCancelClick = () => {
    setQuestionsSize(false);
    setNumber("");
  }

  return (
    <dialog className="cantidad_container" ref={(el) => el && el.showModal()}>
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
        <img src={Cancel} id="cancel_img" alt="cancel img" onClick={handleCancelClick} />
        <img
          src={Advance}
          alt="Advance"
          className={validSize ? "check_allow" : "check_deny"}
          onClick={() => validSize && navigate(`/quiz/${GameMode}`, { state: { cantidad_preguntas: number } })}
        />
      </div>
    </dialog>
  )
}