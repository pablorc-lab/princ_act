import Cross from "../../images/cross_fill.webp"
import "./apuntes.css"

export default function Apuntes({ setShowData, Preguntas, GameMode }) {

  return (
    <dialog className={`apuntes_container ${GameMode}`} ref={(el) => el && el.showModal()}>
      <img
        id="cross_img"
        src={Cross}
        alt="cross"
        width="40"
        onClick={() => { setShowData(false) }}
      />
      <h1>{Preguntas.length} {GameMode}</h1>

      <ul className="apuntes_list">
        {Preguntas.map((principio, index) => (
          <li key={index}>
            <h2> {index + 1}. {principio.principio}</h2>
            <p>{principio.tipo.charAt(0).toUpperCase() + principio.tipo.slice(1)} {principio.uso}</p>
          </li>
        ))}
      </ul>
    </dialog>
  )
}