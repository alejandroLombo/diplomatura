import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import './stilos/header.css';
import Header from "./componentes/layout/Header";
import {Nav} from "./componentes/layout/nav";
import { Footer } from './componentes/layout/footer';
import { Home } from './paginas/home';
import { Galeria } from './paginas/galeria';
import { Nosotros } from './paginas/nosotros';
import { Servicios } from './paginas/servicios';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav/>

          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Galeria" element={<Galeria />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Servicios" element={<Servicios />} />
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
