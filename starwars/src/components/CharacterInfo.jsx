import React from 'react';
import './StarWars.css';

const CharacterInfo = ({ character }) => {
  console.log(character);
  return(
    <div className="character-card">
      <p>Name: {character.name}</p>
      <p>Birthyear: {character.birth_year}</p>
      <p>Eyecolor: {character.eye_color}</p>
      <p>Gender: {character.gender}</p>
      <p>Height: {character.height} cm</p>
      <p>Weight: {character.mass} kg</p>
      <br />
      <br />
    </div>
  )
}

export default CharacterInfo;