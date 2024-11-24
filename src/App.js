import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Quiz from './components/quiz';
import Home from './components/home';

function App() {
  return (
    <HashRouter basename="/princ_act">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="practicar" element={<Quiz respuesta_inmediata={true} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
