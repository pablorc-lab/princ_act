import './App.css';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from './components/home';
import Quiz from './components/quiz';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/practicar" element={<Quiz respuesta_inmediata={true} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;


