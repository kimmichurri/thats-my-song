export const setPlaylistSongsReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PLAYLIST_SONGS':
      return action.songs
    default: 
      return state;
  }
}