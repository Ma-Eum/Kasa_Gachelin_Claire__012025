import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import './Home.scss'; // Import des styles spécifiques à la page Home

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner title="Chez vous, partout et ailleurs" />

      {/* Liste des logements (Housing Section, à compléter) */}
      <main className="main-index">
        <div className="housing housing-index">
          <section className="housing-grid">
            {/* Cartes de logement cliquables */}
            <a href="logement.html" className="housing-link">
              <div className="housing-card">
                <img src="" alt="Image logement" />
                <p className="housing-title">Titre de la location</p>
              </div>
            </a>
            {/* Ajoute plus de cartes ici */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
