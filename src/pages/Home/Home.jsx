import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import './Home.scss'; // Import des styles spécifiques à la page Home

const housingData = [
  {
    id: 1,
    image: "",
    title: 'Titre de la location 1',
    link: '/logement1',
  },
  {
    id: 2,
    image: "",
    title: 'Titre de la location 2',
    link: '/logement2',
  },
  {
    id: 3,
    image: "",
    title: 'Titre de la location 3',
    link: '/logement3',
  },
  {
    id: 4,
    image: "",
    title: 'Titre de la location 4',
    link: '/logement4',
  },
  {
    id: 5,
    image: "",
    title: 'Titre de la location 5',
    link: '/logement5',
  },
  {
    id: 6,
    image: "",
    title: 'Titre de la location 5',
    link: '/logement5',
  },
];

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
            {housingData.map(({ id, image, title, link }) => (
              <Card key={id} image={image} title={title} link={link} />
            ))}
          </section>
        </div>
      </main>

       {/* Footer */}
       <Footer />
    </div>
  );
};

export default Home;
