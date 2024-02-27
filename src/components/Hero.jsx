import "./Hero.css";

function Hero() {
  return (
    <section className="presentation" id="presentation">
      <img className="perfil-img" src="./perfil.webp" alt="Foto de Perfil" />
      <div className="display-block">
        <p className="presentation-name">Hola!, me llamo <span>Axel Iván Mejia Gonzalez</span>!</p>
        <pre>Desarrollador Frontend<img src="./frontend-developer.svg" alt="" /></pre>
        <pre>Desarrollador Backend<img src="./backend-developer.svg" alt="" /></pre>
        <pre>Diseñador Web  <img src="./web-design.svg" alt="Web Design icon" /></pre>
      </div>
    </section> 
  );
}

export default Hero;
