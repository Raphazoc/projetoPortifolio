import './components/pages/global.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Inicio } from "./components/pages/inicio/Inicio";
import { Footer } from './components/Footer/Footer';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export { App };