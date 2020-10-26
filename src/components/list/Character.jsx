import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image, occupation, status }) => (
  <figure>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <h3>{occupation}</h3>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired
};

export default Character;