import React from 'react';
import CharacterInfo from './CharacterInfo';

const CharacterList = ({ characterList }) => {
  return (
    <div className="character-list">
      {characterList.map((character, index) => {
        return (
          <div key={index}>
            <CharacterInfo character={character} />
          </div>
        )
      })}
    </div>
  )
}

export default CharacterList;