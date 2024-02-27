import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <a className="btn" href="mailto:">
          <span className="circle">
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <span className="text">Enviame un correo</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;
