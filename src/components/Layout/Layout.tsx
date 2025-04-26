import './Layout.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <header className="header">
        <nav className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/certification">Certificados</Link>
        </nav>
      </header>

      <main className="main-content">{children}</main>
      
      <footer className="footer">
        <div className="footer-content">
          <p className="texto">
            © 2025 Raphael Martins Pimenta. All rights reserved.
          </p>
          <br></br>
          <div>
            <a
              href="https://github.com/Raphazoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/raphazoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
            </a>

            <a
              href="https://www.instagram.com/raphazoc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
            </a>
          </div>
          <br></br>
          <p className="texto">Minhas redes sociais.</p>
        </div>
      </footer>
    </div>
  );
};
