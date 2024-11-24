import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import Quiz from './components/quiz';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/princ_act" element={<Home/>} />
        <Route path="/princ_act/quiz" element={<Quiz/>} />
        <Route path="/princ_act/quiz" element={<Quiz/>} />
      </Routes>
    </Router>
  );
}

export default App;
