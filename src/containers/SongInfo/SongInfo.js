import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSongs } from '../../thunks/fetchSongs';
import { setCurrentSong } from '../../actions/index';

export class SongInfo extends Component {

  reSpinCategory = (e) => {
    let url;
    const { value } = e.target
    console.log(e.target.value);
    switch (value) {
      case 'Wildcard':
        url = `http://voiceboxpdx.com/api/v1/songs/roulette`
        console.log('wildcard', url);
        this.props.fetchSongs(url)
        break;
      default:
        url = `http://voiceboxpdx.com/api/v1/songs/roulette?tag=${value}`
        console.log(url);
        this.props.fetchSongs(url)
    }
  }

  pickRandomSong = (e) => {
    this.reSpinCategory(e);
    let randomIndex = Math.floor(Math.random() * 10);
    let randomSong = this.props.songs[randomIndex];
    this.props.setCurrentSong(randomSong);
  }
  
  render() {
    const { title, artist } = this.props.currentSong;
    return (
      <div className='song-info-wrapper'>
        <p className='song-category secondary'>{this.props.currentCategory}</p>
        <h3 className='song-title'>{title}</h3>
        <p className='song-artist secondary'>{artist}</p>
        <button className='song-info-page-buttons'>Add to Playlist</button>
        <button 
          className='song-info-page-buttons' 
          value={this.props.currentCategory} 
          onClick={this.pickRandomSong}>Spin {this.props.currentCategory} Again</button>
        <button className='song-info-page-buttons'>Return to Search</button>
      </div>
    )
  }
}

SongInfo.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  currentSong: PropTypes.object.isRequired
}

export const mapStateToProps = (state) => ({
  currentCategory: state.setCurrentCategory,
  currentSong: state.setCurrentSong,
  songs: state.setSongs
});

export const mapDispatchToProps = (dispatch) => ({
  fetchSongs: (url) => dispatch(fetchSongs(url)),
  setCurrentSong: (song) => dispatch(setCurrentSong(song))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongInfo);