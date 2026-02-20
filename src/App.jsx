import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Alex from './pages/Alex';
import Particles from './components/Particles';

function App() {
  return (
    <div className="App">
      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={12}
          speed={0.05}
          particleBaseSize={100}
          /* moveParticlesOnHover */
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>

      {/* <section id="skills" className="min-h-screen flex items-center justify-center">
        <Skills />
      </section> */}

      <section id="alex" className="min-h-screen flex items-start justify-center">
        <Alex />
      </section>
    </div>
  );
}

export default App;
