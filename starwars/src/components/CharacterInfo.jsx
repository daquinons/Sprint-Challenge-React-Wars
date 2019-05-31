import React from 'react';
import './StarWars.css';

const CharacterInfo = ({ character }) => {
  console.log(character);
  return(
    <div className="character-card">
      <p>{character.name}</p>
      <p>{character.height} cm</p>
      <p>{character.mass} kg</p>
      <hr />
    </div>
  )
}

export default CharacterInfo;