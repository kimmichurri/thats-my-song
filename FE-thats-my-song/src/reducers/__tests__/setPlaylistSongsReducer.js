import { setPlaylistSongsReducer } from '../setPlaylistSongsReducer';
import * as actions from '../../actions';

describe('setPlaylistSongsReducer', () => {
  const state = [];
  it('should return state by default', () => {
    const action = {};
    const result = setPlaylistSongsReducer(state, action);
    expect(result).toEqual(state);
  });

  it('should return state with a playlist array', () => {
    const songs = [{song: 'cool song 1'}, {song: 'cool song 2'}];
    const action = actions.setPlaylistSongs(songs);
    const result = setPlaylistSongsReducer(state, action);
    expect(result).toEqual(songs);
  });
});