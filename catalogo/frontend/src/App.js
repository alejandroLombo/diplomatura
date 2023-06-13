import './App.css';
import './stilos/header.css';
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/nav";
import { Footer } from './componentes/layout/footer';
import { Home } from './paginas/home';
import { Franco } from './paginas/nosotros';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
