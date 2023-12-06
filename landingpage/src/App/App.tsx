import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home.tsx';
import FindEvents from '../components/FindEvents/FindEvents.tsx';
import Contactanos from '../components/Contactanos/Contactanos.tsx';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findevents" element={<FindEvents />} />
        <Route path="/contactus" element={<Contactanos />} />
      </Routes>
  );
}

export default App;
