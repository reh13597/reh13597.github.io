import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Coding from './pages/Coding';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route exact path ="/" element={<Home />} />
      <Route path ="/coding" element={<Coding />} />
      <Route path ="/contact" element={<Contact />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
