import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import '../About/About'

const About = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner className="banner-about" />

      {/* Collapse Sections */}
      <main className="main-about">
        <div className="about-collapse-container">
          <div className="about-collapse">
            <input type="checkbox" id="fiabilite-toggle" className="collapse-toggle" />
            <label htmlFor="fiabilite-toggle" className="collapse-btn">
              Fiabilité
              <i className="fa-solid fa-chevron-down"></i>
            </label>
            <div className="collapse-content">
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                et toutes les informations sont régulièrement vérifiées par nos équipes.
              </p>
            </div>
          </div>
          <div className="about-collapse">
            <input type="checkbox" id="respect-toggle" className="collapse-toggle" />
            <label htmlFor="respect-toggle" className="collapse-btn">
              Respect
              <i className="fa-solid fa-chevron-down"></i>
            </label>
            <div className="collapse-content">
              <p>
                La bienveillance fait partie des valeurs fondamentales de Kasa. Tout comportement discriminatoire ou de 
                perturbation du voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          </div>
          <div className="about-collapse">
            <input type="checkbox" id="service-toggle" className="collapse-toggle" />
            <label htmlFor="service-toggle" className="collapse-btn">
              Service
              <i className="fa-solid fa-chevron-down"></i>
            </label>
            <div className="collapse-content">
              <p>
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N hésitez pas à nous 
                contacter si vous avez la moindre question.
              </p>
            </div>
          </div>
          <div className="about-collapse">
            <input type="checkbox" id="securite-toggle" className="collapse-toggle" />
            <label htmlFor="securite-toggle" className="collapse-btn">
              Sécurité
              <i className="fa-solid fa-chevron-down"></i>
            </label>
            <div className="collapse-content">
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement 
                correspond aux critères de sécurité établis par nos services.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer footer-about">
        <div className="footer-logo">
          <img src="/assets/images/LOGO.png" alt="Logo Kasa" />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default About;
