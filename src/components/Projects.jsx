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
        <section className="grid-cards">
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
            buttonPageClassName="button-page-1"
            hrefPage="https://nebuverse.netlify.app/"
            namePage="NebuVerse"
          />

          <Card
            cardClassName="card-2"
            titleProject="MortyApiHub"
            descProject="MortyApiHub es un catálogo completo con todos los personajes de la serie animada de 'Rick And Morty' y funciona a través de una API"
            technologyClassName1="technology-Astro" 
            technologyName1="Svelte"
            technologyClassName2="technology-Tailwind"
            technologyName2="CSS"
            buttonPageClassName="button-page-2"
            hrefPage="https://mortyapihub.netlify.app/"
            namePage="MortyApiHub"
          />
        </section>

        <section className="grid-cards-2">
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
            buttonPageClassName="button-page-3"
            hrefPage="https://arkanoidgameproject.netlify.app/"
            namePage="Arkanoid Game"
          />
        </section>

        <section className="display-block-mobile">
          <Card
            cardClassName="card-1-mobile"
            titleProject="NebuVerse"
            descProject="Nebuverse es un proyecto que nacio de una idea entre amigos con el fin de poder darnos a conocer y ofrecer servicios de desarrollo web Freelance"
          />

          <Card
            cardClassName="card-2-mobile"
            titleProject="MortyApiHub"
            descProject="MortyApiHub es un catalogo completo con todos los personajes de la serie animada de 'Rick And Morty' y funciona a traves de una API: Creditos a Axel Fuhrmann"
          />

          <Card
            cardClassName="card-3-mobile"
            titleProject="Arkanoid Game"
            descProject="Arkanoid es un videojuego de arcade desarrollado por Taito en 1986. Está basado en Breakout de Atari de 1976 y esta es una version hecha por mi"
          />
        </section>
      </section>
    </>
  );
}

export default Projects;
