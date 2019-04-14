import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFromPlaylist } from '../../thunks/getFromPlaylist';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';

export class Playlist extends Component {

  goToPlaylist = () => {
    const url = 'http://localhost:3001/api/v1/playlist/';
    this.props.getFromPlaylist(url);
  }

  componentDidMount = () => {
   this.goToPlaylist();
  }

  render() {
    let playlistCards = this.props.playlist.map(song => {
      return (
        <PlaylistCard
          key={song.id}
          id={song.id}
          title={song.title}
          artist={song.artist}
        />
      )
    });

    return (
      <div className='playlist-wrapper'>
        <h2>Welcome to your Playlist!</h2>
        {playlistCards}
        <NavLink to='/' id='return-to-search-navlink'>
          <button className='song-info-page-buttons'>Return to Search</button>
      </NavLink> 
      </div>
    )
  }
}

Playlist.propTypes = {
  playlist: PropTypes.array.isRequired,
  getFromPlaylist: PropTypes.func.isRequired
}

export const mapStateToProps = (state) => ({
  playlist: state.setPlaylist,
});

export const mapDispatchToProps = (dispatch) => ({
  getFromPlaylist: (url) => dispatch(getFromPlaylist(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);