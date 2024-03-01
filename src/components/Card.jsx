/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import "./Card.css";

function Card(props) {
  return (
    <>
      <div className={props.cardClassName}>
        <h2>{props.titleProject}</h2>
        <p>{props.descProject}</p>
        <div className="Technologies">
          <button name={props.nameButton1} className={props.technologyClassName1}>
            {props.technologyName1}
          </button>
          <button name={props.nameButton2} className={props.technologyClassName2}>
            {props.technologyName2}
          </button>
          <button name={props.nameButton3} className={props.technologyClassName3}>
            {props.technologyName3}
          </button>
        </div>
        <div className={props.buttonPageClassName}>
          <a href={props.hrefPage} className="link-page">
            Ir a {props.namePage}
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
