import { mapStateToProps } from './SongInfo';

describe('SongInfo', () => {
  describe('mapStateToProps', () => {
    it('should return an array of songs', () => {
      const mockState = {
        isLoading: false,
        setSongs: [
          {
            "title": "Don't Think Twice It's Alright",
            "artist": "Dylan, Bob",
            "tags": [
                "Folk",
                "Pop",
                "Rock"
            ]
          },
          {
            "title": "There's A Light That Never Goes Out",
            "artist": "Smiths, The",
            "tags": [
                "Alternative",
                "Indie",
                "Pop",
                "Rock",
                "80s",
                "British"
            ]
          }
        ],
        otherThing: 'thing1',
        anotherThing: ['thing2']
      }
      const expected = {
        songs: [
          {
            "title": "Don't Think Twice It's Alright",
            "artist": "Dylan, Bob",
            "tags": [
                "Folk",
                "Pop",
                "Rock"
            ]
          },
          {
            "title": "There's A Light That Never Goes Out",
            "artist": "Smiths, The",
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
      }
      const mappedProps = mapStateToProps(mockState);
      console.log(mappedProps);
      expect(mappedProps).toEqual(expected);
    });
  });
});