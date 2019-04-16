import React from 'react';
import PropTypes from 'prop-types';

export default function PlaylistCard({title, artist, id, deleteSongFromPlaylist }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{artist}</p>
      <button onClick={(e) => deleteSongFromPlaylist(e)} value={id}>Remove</button>
    </div>
  )
}

PlaylistCard.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  id: PropTypes.number
}

