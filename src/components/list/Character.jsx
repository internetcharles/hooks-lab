import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, occupation, status }) => (
  <figure>
    <h1>{name}</h1>
    <h3>{occupation}</h3>
    <h3>Status: {status}</h3>
  </figure>
)

Character.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default Character;