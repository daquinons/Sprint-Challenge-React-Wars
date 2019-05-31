import React from 'react';

const CharacterInfo = ({ character }) => {
  console.log(character);
  return(
    <div>
      <p>{character.name}</p>
      <p>{character.height} cm</p>
      <p>{character.mass} kg</p>
      <hr />
    </div>
  )
}

export default CharacterInfo;