import React from 'react';
import CharacterInfo from './CharacterInfo';

const CharacterList = ({ characterList }) => {
  return (
    characterList.map((character, index) => {
      return (
        <div key={index}>
          <CharacterInfo character={character} />
        </div>
      )
    })
  )
}

export default CharacterList;