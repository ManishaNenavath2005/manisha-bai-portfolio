import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Fixed cosmic background — stars + soft color glows.
          Sits behind EVERY section, not just the Hero, so the whole
          site shares one consistent background instead of just the top. */}
            {/* Fixed cosmic background — twinkling stars + three slowly drifting
          color glows + a soft vignette. Sits behind every section. */}
      <div className="site-background" aria-hidden="true">
        <span className="site-glow site-glow-1" />
        <span className="site-glow site-glow-2" />
        <span className="site-glow site-glow-3" />
        <span className="site-vignette" />
      </div>

      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;