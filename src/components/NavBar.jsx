import { Link } from "react-router-dom"


function NavBar() {
    return <nav className="navbar">
        <div className="navbar-marca">
            <Link to="/"> App de peliculas </Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="navbar-link"> Inicio </Link>
            <Link to="/favorites" className="navbar-link"> Favoritos </Link>
        </div>
    </nav>
}

export default NavBar
