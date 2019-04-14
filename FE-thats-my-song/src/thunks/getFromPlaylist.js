import { isLoading, setFetchError } from '../actions';

export const getFromPlaylist = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error (response.statusText)
      }
      const playlistSongs = await response.json();
      console.log(playlistSongs);
      dispatch(isLoading(false));
    } catch (error) {
      dispatch(setFetchError(error.message));
    }
  }
}