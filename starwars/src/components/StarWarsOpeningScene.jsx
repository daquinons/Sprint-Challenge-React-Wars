import React from 'react';
import CharacterList from './CharacterList';
import './StarWars.css';

const StarWarsOpeningScene = ({ characterList }) => {
  return (
    <div id="titles">
      <div id="titlecontent">
        <h1>React Wars</h1>
        <p>In a coding school far, far away...</p>
        <p>With the participation of the next characters:</p>
	      <CharacterList characterList={characterList} />
      </div>
    </div>
  )
}

export default StarWarsOpeningScene;