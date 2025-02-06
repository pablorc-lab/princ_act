import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/home"));
const Quiz = lazy(() => import("./components/quiz"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<h1 style={{textAlign:"center"}}>Cargando...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:type" element={<Quiz />} />
          <Route path="/practicar/:type" element={<Quiz respuesta_inmediata={true} />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
