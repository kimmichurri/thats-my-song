import { setSongsReducer } from '../setSongsReducer';
import * as actions from '../../actions';

describe('setSongsReducer', () => {
  const state = []; 
  it('should return default state', () => {
    const action = {
    }
    const results = setSongsReducer(state, action);
    expect(results).toEqual(state);
  });

  it('should return state with an array of songs', () => {
    const songs = [
      {
        "id": 63303,
        "title": "Don't Think Twice It's Alright",
        "artist": "Dylan, Bob",
        "language": "English",
        "popularity": 1398,
        "play_count": 387,
        "added_on": "2009-11-10",
        "tags": [
            "Folk",
            "Pop",
            "Rock"
        ]
      },
      {
        "id": 68158,
        "title": "There's A Light That Never Goes Out",
        "artist": "Smiths, The",
        "language": "English",
        "popularity": 4010,
        "play_count": 862,
        "added_on": "2011-06-29",
        "tags": [
            "Alternative",
            "Indie",
            "Pop",
            "Rock",
            "80s",
            "British"
        ]
      }
    ]
    const action = actions.setSongs(songs);
    const results = setSongsReducer(state, action);
    expect(results).toEqual(songs);
  });
});