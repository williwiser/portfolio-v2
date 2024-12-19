import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Projects from "./Projects";
import Skills from "./Skills";
function App() {
  return (
    <>
      <Navigation />
      <main className="main-bg">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
