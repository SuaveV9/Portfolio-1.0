/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import "./Card.css";

function Card(props) {
  return (
    <>
      <section className="card-grid">
        <div className={props.cardClassName}>
          <h2>{props.titleProject}</h2>
          <p>{props.descProject}</p>
          <div className="Technologies">
            <button className={props.technologyClassName1}>
              {props.technologyName1}
            </button>
            <button className={props.technologyClassName2}>
              {props.technologyName2}
            </button>
            <button className={props.technologyClassName3}>
              {props.technologyName3}
            </button>
          </div>
          <div className={props.buttonPageClassName}>
            <a href={props.hrefPage} className="link-page">
              <span>Ir a {props.namePage}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
