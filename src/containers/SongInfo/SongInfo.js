import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class SongInfo extends Component {
  
  render() {
    const { title, artist } = this.props.currentSong;
    return (
      <div>
        <p>{this.props.currentCategory}</p>
        <h4>{title}</h4>
        <p>{artist}</p>
        <button>Spin Again</button>
        <button>Add to Playlist</button>
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