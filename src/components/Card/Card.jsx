import './Card.scss'; // Import des styles spécifiques à la carte
import PropTypes from 'prop-types';

const Card = ({ image, title, link }) => {
  return (
    <a href={link} className="housing-link">
      <div className="housing-card">
        {/* Vérifie que l'image n'est pas vide et affiche uniquement si elle existe */}
        {image ? <img src={image} alt={title} /> : null}
        <p className="housing-title">{title}</p>
      </div>
    </a>
  );
};

Card.propTypes = {
  image: PropTypes.string, // image peut être vide
  title: PropTypes.string.isRequired, // titre obligatoire
  link: PropTypes.string.isRequired, // lien obligatoire
};

export default Card;
