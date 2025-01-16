import './Header.scss'; // Import des styles spécifiques au header
import logo from '../../assets/images/LOGO.png'; // Import du logo

const Header = () => {
  return (
    <header className="header header-index">
      <div className="header-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="header-nav">
        <a href="/" className="nav-link active">
          Accueil
        </a>
        <a href="/about" className="nav-link">
          A Propos
        </a>
      </nav>
    </header>
  );
};

export default Header;
