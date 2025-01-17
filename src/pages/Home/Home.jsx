import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import './Home.scss'; // Import des styles spécifiques à la page Home

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <Header />

      <main className="main-index">
        {/* Banner */}
        <Banner title="Chez vous, partout et ailleurs" />

        {/* Liste des logements */}
        <div className="housing housing-index">
          <section className="housing-grid">
            {/* Exemple de cartes de logement */}
            <a href="logement.html" className="housing-link">
              <div className="housing-card">
                <img src="" alt="Image logement" />
                <p className="housing-title">Titre de la location</p>
              </div>
            </a>
            {/* Vous pouvez ajouter d'autres cartes ici */}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
