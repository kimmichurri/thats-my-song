import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/Loader';
import { getFromPlaylist } from '../../thunks/getFromPlaylist';

export class Playlist extends Component {

  goToPlaylist = () => {
    const url = 'http://localhost:3001/api/v1/playlist/';
    this.props.getFromPlaylist(url);
  }

  componentDidMount = () => {
   this.goToPlaylist();
  }

  render() {
    console.log(this.props);
    return (
      <div className='playlist-wrapper'>
      {!this.props.playlist? <Loader /> : <p>you've got props'</p>}
        <h2>Welcome to your Playlist!</h2>
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