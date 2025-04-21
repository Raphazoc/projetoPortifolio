
import './Footer.css';
import SocialLinks from '../../Links/SocialLinks';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p className='texto'>© 2025 Raphael Martins Pimenta. All rights reserved.</p>
                <br></br>
                <SocialLinks />
                <br></br>
                <p className='texto'>Minhas redes sociais.</p>
            </div>
        </footer>
    );
}