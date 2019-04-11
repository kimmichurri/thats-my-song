import React, { Component } from 'react';
import Selections from '../Selections/Selections';
import SpinMe from '../SpinMe/SpinMe';

class App extends Component {

  async componentDidMount() {
    const url = `http://voiceboxpdx.com/api/v1/songs/roulette?tag=Divas`
    try {
      const response = await fetch(url)
      const results = await response.json()
      const songs = results.songs
      console.log(songs)
    } catch (error) {
      throw new Error('There was a problem getting the data')
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='main-title'>That's My Song</h1>
        </header>
        <Selections />
        <SpinMe />
      </div>
    );
  }
}

export default App;
