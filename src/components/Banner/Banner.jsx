import PropTypes from 'prop-types'; // Import PropTypes
import './Banner.scss'; // Assure-toi que ce chemin est correct

const Banner = ({ title }) => {
  return (
    <section className="banner banner-index">
      <div className="banner-title">{title}</div>
    </section>
  );
};

// Validation des props
Banner.propTypes = {
  title: PropTypes.string.isRequired, // 'title' est requis et doit être une chaîne
};

export default Banner;
