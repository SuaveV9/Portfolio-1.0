import "./Skills.css";

function Skills() {
  return (
    <>
      <section className="skills">
        <h2 className="skills-title-section">Habilidades</h2>
        <div className="skills-content">
          {/* Habilidades Frontend */}
          <div className="frontend-skills">
            <h3 className="skills-title">Frontend</h3>

            <div className="icons-skills">
              <img src="./html-5-svgrepo-com.svg" alt="html-icon" />
              <img src="./css-3-svgrepo-com.svg" alt="css-icon" />
              <img src="./tailwind-svgrepo-com.svg" alt="tailwind-icon" />

              <img src="./js-svgrepo-com.svg" alt="js-icon" />
              <img src="./vite-svgrepo-com.svg" alt="vite-icon" />
              <img src="./astro-svgrepo-com.svg" alt="astro-icon" />
            </div>
          </div>

          {/* Habilidades Backend */}
          <div className="backend-skills">
            <h3 className="skills-title">Backend</h3>

            <div className="icons-skills">
              <img src="./node-js-svgrepo-com.svg" alt="node-js-icon" />
              <img src="./express-svgrepo-com.svg" alt="express-icon" />
            </div>
          </div>

          {/* Habilidades en aprendizaje */}
          <div className="learning-skills">
            <h3 className="skills-title">Aprendiendo</h3>

            <div className="icons-skills">
              <img src="./mysql-svgrepo-com.svg" alt="mysql-icon" />
              <img src="./react-svgrepo-com.svg" alt="react-icon" />
              <img src="./next-16-svgrepo-com.svg" alt="next-icon" />

              <img src="./svelte-icon-svgrepo-com.svg" alt="svelte-icon" />
              <img src="./php-svgrepo-com.svg" alt="php-icon" />
              <img src="./json-svgrepo-com.svg" alt="json-icon" />
            </div>
          </div>

          {/* Habilidades que me gustaria aprender */}
          <div className="wanttolearn-skills">
            <h3 className="skills-title">Lo que me gustaria aprender</h3>

            <div className="icons-skills">
              <img src="./flutter-svgrepo-com.svg" alt="flutter-icon" />
              <img src="./python-svgrepo-com.svg" alt="python-icon" />
              <img src="./java-svgrepo-com.svg" alt="java-icon" />

              <img src="./photoshop-svgrepo-com.svg" alt="photoshop-icon" />
              <img src="./figma-svgrepo-com.svg" alt="figma-icon" />
              <img src="./adobe-xd-logo-svgrepo-com.svg" alt="adobexd-icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
