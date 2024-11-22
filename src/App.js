import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import Home_preguntas from './components/index_quiz';
import Quiz_preguntas from './components/preguntas/Preguntas';
import Final_result from './components/resultados/resultados';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/princ_act" element={<Home_preguntas/>} />
      </Routes>
    </Router>
  );
}

export default App;
