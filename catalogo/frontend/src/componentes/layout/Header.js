
import logo from '../img/logo.png'

const Header = (props) => {
    return (
        <header>
        <div className="holder">
            <img src={logo} width="100" alt=""></img>
            <h1>Transporte 2023</h1>
        </div>
    </header>
    )
}

export default Header;