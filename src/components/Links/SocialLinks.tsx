// src/components/SocialLinks.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialLinks.css';  // Certifique-se de importar o CSS

const SocialLinks = () => {
    return (
        <div>
            <a href="https://github.com/Raphazoc" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className="icon" /> {/* Aplicando a classe */}
            </a>
            <a href="https://www.linkedin.com/in/raphazoc" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" /> {/* Aplicando a classe */}
            </a>

            <a href="https://www.instagram.com/raphazoc/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" /> {/* Aplicando a classe */}
            </a>
        </div>
    );
};

export default SocialLinks;
