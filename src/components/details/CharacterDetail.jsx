import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, image, description }) => (
  <figure data-testid='detail'>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <h3>{description}</h3>
  </figure>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CharacterDetail;