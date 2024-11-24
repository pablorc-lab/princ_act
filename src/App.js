import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import Quiz from './components/quiz';
import Home from './components/home';
import Final_result from './components/resultados/resultados';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/princ_act" element={<Home />} />
        <Route path="/princ_act/quiz" element={<Quiz />} />
        <Route path="/princ_act/practicar" element={<Quiz respuesta_inmediata={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
