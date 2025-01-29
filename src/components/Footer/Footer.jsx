import './footer.scss';
import logo from '../../assets/images/LOGO.png'; // Import du logo

const Footer = () => {
  return (
    <footer className="footer footer-404">
      <div className="footer-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
