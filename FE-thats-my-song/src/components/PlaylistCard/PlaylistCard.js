import React from 'react';

export default function PlaylistCard({title, artist, id}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{artist}</p>
      <button value={id}>Remove</button>
    </div>
  )
}