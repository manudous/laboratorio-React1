
export const getMembers = () => {
    fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((json) => json.results);
  }
