import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Coding from './pages/Coding';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return ( 
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route path ="/coding" element={<Coding />} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
