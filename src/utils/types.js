import PropTypes from "prop-types";

export const CardType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Optionnel si 'id' n'est pas disponible
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  job: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
});
