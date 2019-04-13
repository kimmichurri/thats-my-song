import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class SongInfo extends Component {

  generateRandomIndex = () => {
    let randomIndex = Math.floor(Math.random() * Math.floor(9));
    console.log(randomIndex)
    return randomIndex;
  }

  render() {
    return (
      <div>
        <p>This is a song {randomIndex}</p>
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