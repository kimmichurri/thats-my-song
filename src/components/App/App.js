import React, { Component } from 'react';
import './_App.scss';
import Selections from '../Selections/Selections';

class App extends Component {

  async componentDidMount() {
    const url = `http://voiceboxpdx.com/api/v1/songs?by=popularity`
    try {
      const response = await fetch(url)
      const songs = response.json()
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
          <Selections />
        </header>
      </div>
    );
  }
}

export default App;
