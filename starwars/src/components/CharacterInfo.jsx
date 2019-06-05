import React from 'react';
import './StarWars.css';

const CharacterInfo = ({ character }) => {
  return(
    <div className="character-card">
      <p>Name: {character.name}</p>
      <p>Height: {character.height} cm</p>
      <p>Weight: {character.mass} kg</p>
    </div>
  )
}

export default CharacterInfo;