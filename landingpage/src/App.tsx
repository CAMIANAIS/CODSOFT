import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Nosotros from './components/Nosotros/Nosotros';
import DonaAhora from './components/DonaAhora/DonaAhora';
import PostulaAqui from './components/PostulaAqui/PostulaAqui';
import Contactanos from './components/Contactanos/Contactanos';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/dona-ahora" element={<DonaAhora />} />
        <Route path="/postula-aqui" element={<PostulaAqui />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
    </Router>
  );
}

export default App;
