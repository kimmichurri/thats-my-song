import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class SongInfo extends Component {
  
  render() {
    const { title, artist } = this.props.currentSong;
    return (
      <div className='song-info-wrapper'>
        <p className='song-category secondary'>{this.props.currentCategory}</p>
        <h3 className='song-title'>{title}</h3>
        <p className='song-artist secondary'>{artist}</p>
        <button className='song-info-page-buttons'>Add to Playlist</button>
        <button className='song-info-page-buttons'>Spin {this.props.currentCategory} Again</button>
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
  currentSong: state.setCurrentSong
});


export default connect(mapStateToProps, null)(SongInfo);