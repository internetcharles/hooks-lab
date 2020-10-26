import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const Characters = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <a key={character.name} href={`/${character.name}`}>
        <Character {...character} />
      </a>
    </li>
  ));

  return (
    <ul data-testid='list'>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
  }))
};

export default Characters;