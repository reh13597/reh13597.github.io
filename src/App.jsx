import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route path ="/experience" element={<Experience />} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
