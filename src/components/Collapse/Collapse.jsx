import PropTypes from 'prop-types';
import './Collapse.scss';

const Collapse = ({ title, content }) => {
  const id = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="collapse">
      <input type="checkbox" id={id} className="collapse-toggle" />
      <label htmlFor={id} className="collapse-btn">
        {title}
        <i className="fa-solid fa-chevron-down"></i>
      </label>
      <div className="collapse-content">
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

export default Collapse;
