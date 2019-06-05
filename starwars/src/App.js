import React, { Component } from 'react';
import StarWarsOpeningScene from './components/StarWarsOpeningScene';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextPage: ""
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  componentDidUpdate(_, prevState) {
    if (this.state.nextPage && prevState.nextPage !== this.state.nextPage) {
      this.getCharacters(this.state.nextPage);
    }
    
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.addCharacters(data.results);
        this.setState({ nextPage: data.next });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  addCharacters = newCharacters => {
    this.setState(oldState => {
      return (
        {
          starwarsChars: oldState.starwarsChars.concat(newCharacters),
        }
      )
    })
  }

  render() {
    return (
      <div className="App">
        <StarWarsOpeningScene characterList={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
