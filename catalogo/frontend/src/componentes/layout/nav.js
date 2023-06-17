import {BrowserRouter as Router,Route, NavLink} from "react-router-dom";
import { Nosotros } from "../../paginas/nosotros";
import { Home } from "../../paginas/home";
import Servicios from "../../paginas/servicios";
import Galeria from "../../paginas/galeria";

const Navbar = () => {
    return (
       <Router>
        <Nav/>
        
            <Route exact path="/Home" Component={Home}/>
            <Route exact path="/galeria" Component={Galeria}/>
            <Route exact path="/servicios" Component={Servicios}/>
            <Route exact path="/nosortros" Component={Nosotros}/>
        
       </Router>
    )
}



const Nav = () => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="activo">Home</NavLink>
                        <NavLink to="/galeria" activeClassName="activo">Galeria</NavLink>
                        <NavLink to="/servicios" activeClassName="activo">Servicios</NavLink>
                        <NavLink to="/nosotros" activeClassName="activo">Nosotros</NavLink>
                    </li>
                </ul>
            </div>

        </nav>

    )
}

export default Navbar;
