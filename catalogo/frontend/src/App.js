import './App.css';
import './stilos/header.css';
import Header from "./componentes/layout/Header";
import Navbar from "./componentes/layout/nav";
import { Footer } from './componentes/layout/footer';
import { Home } from './paginas/home';
import { Nosotros } from './paginas/nosotros';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
