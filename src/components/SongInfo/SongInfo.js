import React from 'react'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function SongInfo() {
  return (
    <p>This is a song</p>
  )
}

SongInfo.propTypes = {
  songs: PropTypes.array.isRequired
}

export const mapStateToProps = (state) => ({
  songs: state.setSongs
});

export default connect(mapStateToProps, null)(SongInfo);