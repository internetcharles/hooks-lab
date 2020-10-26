import React, { useState, useEffect } from 'react';
import Characters from '../components/list/Characters';
import { getCharacters } from '../services/xfiles-api';

const CharacterList = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <Characters characters={characters} />
  );
};

export default CharacterList;
