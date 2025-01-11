import './App.css';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from './components/home';
import Quiz from './components/quiz';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:type" element={<Quiz />} />
        <Route path="/practicar/:type" element={<Quiz respuesta_inmediata={true} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;


