import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/details/CharacterDetail';
import { getCharacterDetails } from '../services/xfiles-api';

const DetailPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState('');

  const characterName = match.params.characterName;

  useEffect(() => {
    getCharacterDetails(characterName)
      .then(fetchedCharacter => setCharacter(fetchedCharacter[0]))
      .finally(() => setLoading(false));
  }, [characterName]);

  if(loading) return <h1>Loading</h1>;

  return (
    <CharacterDetail {...character} />
  );
};

export default DetailPage;