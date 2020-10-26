import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const ListPage = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.name}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul data-testid="list">
      {characterElements}
    </ul>
  );
};

ListPage.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }))
};

export default ListPage;