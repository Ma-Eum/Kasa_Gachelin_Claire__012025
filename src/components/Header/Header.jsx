import './Header.scss'; // Import des styles spécifiques au header
import logo from '../../assets/images/LOGO.png'; // Import du logo
import { NavLink } from 'react-router-dom'; // Utilisation de NavLink pour la navigation dynamique

const Header = () => {
  return (
    <header className="header header-accomodations">
      <div className="header-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          end // Empêche le lien "/" d'être actif pour d'autres sous-routes
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
