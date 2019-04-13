import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class SongInfo extends Component {
  constructor() {
    super();
    this.state = {
      chosenSong: {}
    }
  }

  generateRandomIndex = () => {
    let randomIndex = Math.floor(Math.random() * 10);
    console.log(randomIndex)
    console.log(this.props.songs[randomIndex])
    this.setState({chosenSong: this.props.songs[randomIndex]})
  }

  render() {
    const {title, artist} = this.state.chosenSong
    return (
      <div>
        <p>This is a song</p>
        <h3>{title}</h3>
        <p>{artist}</p>
        <button onClick={this.generateRandomIndex}>Spin Again</button>
        <button>Add to Playlist</button>
      </div>
    )
  }
}

SongInfo.propTypes = {
  songs: PropTypes.array.isRequired
}

export const mapStateToProps = (state) => ({
  songs: state.setSongs
});

export default connect(mapStateToProps, null)(SongInfo);