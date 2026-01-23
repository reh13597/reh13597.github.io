import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Alex from './pages/Alex';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </div>

      <div id="projects" className="min-h-screen flex items-center justify-center">
        <Projects />
      </div>

      <div id="alex" className="min-h-screen flex items-center justify-center">
        <Alex />
      </div>

      <div id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </div>
    </div>
  );
}

export default App;
