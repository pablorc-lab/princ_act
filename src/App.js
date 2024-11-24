import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Quiz from './components/quiz';
import Home from './components/home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/princ_act" element={<Home />} />
        <Route path="/princ_act/quiz" element={<Quiz />} />
        <Route path="/princ_act/practicar" element={<Quiz respuesta_inmediata={true} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
