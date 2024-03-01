import "./Projects.css";
import Card from "./Card";

function Projects() {
  return (
    <>
      <section className="projects">
        <h2>Proyectos</h2>
        <p>Aqui hay algunos proyectos en los que he trabajado:</p>
        <p className="mobile-information">
          Presiona sobre cualquier tarjeta para mas informacion
        </p>
        <div className="display-grid">
          <div className="grid-cards">
            <Card
              cardClassName="card-1"
              titleProject="NebuVerse"
              descProject="Nebuverse es un proyecto que nacio de una idea entre amigos con el fin de poder darnos a conocer y ofrecer servicios de desarrollo web Freelance"
              technologyClassName1="technology-Astro"
              technologyName1="Astro"
              technologyClassName2="technology-HTML"
              technologyName2="HTML"
              technologyClassName3="technology-Tailwind"
              technologyName3="Tailwind"
              nameButton1="Astro"
              nameButton2="HTML"
              nameButton3="Tailwind"
              buttonPageClassName="button-page-1"
              hrefPage="https://nebuverse.netlify.app/"
              namePage="NebuVerse"
            />
          </div>

          <div className="grid-cards">
            <Card
              cardClassName="card-2"
              titleProject="MortyApiHub"
              descProject="MortyApiHub es un catálogo completo con todos los personajes de la serie animada de 'Rick And Morty' y funciona a través de una API"
              technologyClassName1="technology-Astro"
              technologyName1="Svelte"
              technologyClassName2="technology-Tailwind"
              technologyName2="CSS"
              nameButton1="Svelte"
              nameButton2="CSS"
              nameButton3="none"
              buttonPageClassName="button-page-2"
              hrefPage="https://mortyapihub.netlify.app/"
              namePage="MortyApiHub"
            />
          </div>

          <div className="grid-cards">
            <Card
              cardClassName="card-3"
              titleProject="Arkanoid Game"
              descProject="Arkanoid es un videojuego de arcade desarrollado por Taito en 1986. Está basado en Breakout de Atari de 1976 y esta es una version hecha por mi"
              technologyClassName1="technology-HTML"
              technologyName1="HTML"
              technologyClassName2="technology-Tailwind"
              technologyName2="CSS"
              technologyClassName3="technology-JavaScript"
              technologyName3="JavaScript"
              nameButton1="HTML"
              nameButton2="CSS"
              nameButton3="JavaScript"
              buttonPageClassName="button-page-3"
              hrefPage="https://arkanoidgameproject.netlify.app/"
              namePage="Arkanoid Game"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
