export const getCharacters = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=1')
    .then(res => res.json())
    .then(json => json.results.map(character => ({
      name: character.name,
      image: character.image,
      occupation: character.occupation,
      status: character.status
    })));
};