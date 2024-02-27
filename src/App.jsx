//import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

//import css
import "./App.css";

function Portfolio() {
  return (
    <>
      <Header />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </div>
    <Footer />
    </>
  );
}

export default Portfolio;
