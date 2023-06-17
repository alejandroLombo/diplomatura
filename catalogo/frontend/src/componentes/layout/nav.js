import { NavLink } from "react-router-dom";
export function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="holder">
          <ul>
            <li><NavLink className={({ isActive }) => (isActive ? "activo" : null)} to="/Home">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "activo" : null)} to="/Galeria">Galeria</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "activo" : null)} to="/Nosotros">Nosotros</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "activo" : null)} to="/servicios">Servicios</NavLink></li>

          </ul>
        </div>
      </nav>

    </>
  )

}