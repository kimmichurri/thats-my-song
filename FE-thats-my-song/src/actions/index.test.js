import * as actions from './index';

describe('actions', () => {
  it('should return a type of IS_LOADING with a boolean', () => {
    const boolean = 'true';
    const expected = {
      type: 'IS_LOADING',
      isLoading: boolean
    }
    const result = actions.isLoading(boolean);
    expect(result).toEqual(expected);
  });

  it('should return a type of SET_SONGS with songs', () => {
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
    const expected = {
      type: 'SET_SONGS',
      songs
    }
    const result = actions.setSongs(songs);
    expect(result).toEqual(expected);
  });

});