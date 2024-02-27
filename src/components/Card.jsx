/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import "./Card.css";

function Card(props) {
  return (
    <>
      <section className="card">
        <img src={props.project} alt="Project" className="img-container" />
        <span className="project-title">{props.title}</span>
        <pre className="project-desc">{props.desc}</pre>
        <div className={props.TechnologiesFatherClassName}>
          <div className={props.technologyClassName1}>
            <span>{props.technology1}</span>
          </div>
          <div className={props.technologyClassName2}>
            <span>{props.technology2}</span>
          </div>
          <div className={props.technologyClassName3}>
            <span>{props.technology3}</span>
          </div>
        </div>
        <a href={props.page} target="_blank" className="link-page">
          Ir a la pagina del proyecto
        </a>
      </section>
    </>
  );
}

export default Card;
