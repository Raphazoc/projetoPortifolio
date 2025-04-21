import './Header.css';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <div className="logo">Raphael Martins Pimenta</div>
            <nav className="nav-links">
                <Link to="/">Início</Link>
                <Link to="/projetos">Projetos</Link>
            </nav>
        </header>
    );
};
