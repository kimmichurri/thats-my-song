import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Playlist extends Component {
  render() {
    return (
      <div className='playlist-wrapper'>
        <h2>Welcome to your Playlist!</h2>
        <NavLink to='/' id='return-to-search-navlink'>
          <button className='song-info-page-buttons'>Return to Search</button>
        </NavLink>
      </div>
    )
  }
}