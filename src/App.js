import './App.css';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Quiz from './components/quiz';
import Home from './components/home';

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


