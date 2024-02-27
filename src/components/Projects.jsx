import "./Projects.css";
import Card from "./Card";

function Projects() {
  return (
    <>
      <section className="projects">
        <h2>Proyectos</h2>
        <p>Aqui hay algunos proyectos en los que he trabajado:</p>
        <section className="grid-cards">
          <Card
            project="./Project-1.webp"
            title="NebuVerse"
            page="https://nebuverse.netlify.app/"
            desc="Nebuverse es un proyecto que nacio de una idea entre amigos con el fin de poder darnos a conocer y ofrecer servicios de desarrollo web Freelance"
            TechnologiesFatherClassName="Technologies-grid"
            technologyClassName1="Technologies-Astro"
            technologyClassName2="Technologies-HTML"
            technologyClassName3="Technologies-Tailwind"
            technology1="Astro"
            technology2="HTML"
            technology3="Tailwind"
          />

          <Card
            project="./Project-2.webp"
            title="MortyApiHub"
            page="https://mortyapihub.netlify.app/"
            desc="MortyApiHub es un catalogo completo con todos los personajes de la serie animada de 'Rick And Morty' y funciona a traves de una API"
            TechnologiesFatherClassName="Technologies-flex"
            technologyClassName1="Technologies-Svelte"
            technologyClassName2="Technologies-CSS"
            technology1="Svelte"
            technology2="CSS"
          />

          <Card 
          project="./Project-3.webp"
          title="Arkanoid Game"
          page="https://arkanoidgameproject.netlify.app/"
          desc="Arkanoid es un videojuego de arcade desarrollado por Taito en 1986. Está basado en Breakout de Atari de 1976 y esta es una version hecha por mi"
          TechnologiesFatherClassName="Technologies-grid"
          technologyClassName1="Technologies-HTML"
          technologyClassName2="Technologies-CSS"
          technologyClassName3="Technologies-JavaScript"
          technology1="HTML"
          technology2="CSS"
          technology3="JavaScript"
          />
          
        </section>
      </section>
    </>
  );
}

export default Projects;
