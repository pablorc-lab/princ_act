import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Quiz from './components/quiz';
import Home from './components/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="practicar" element={<Quiz respuesta_inmediata={true} />} />
    </Routes>
  );
}

export default App;
