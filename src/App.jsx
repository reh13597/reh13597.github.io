import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Alex from './pages/Alex';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center">
        <Skills />
      </section>

      <section id="alex" className="min-h-screen flex items-start justify-center">
        <Alex />
      </section>

      {/* <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section> */}
    </div>
  );
}

export default App;
