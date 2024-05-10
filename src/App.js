import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './Homepage';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact'

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/About" element={<About />} /> 
        <Route path="/Services" element={<Services />} /> 
        <Route path="/Pricing" element={<Pricing />} /> 
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;
