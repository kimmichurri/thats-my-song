import { mapStateToProps, mapDispatchToProps } from './SongInfo';
jest.mock('../../thunks/fetchSongs');
jest.mock('../../thunks/sendToPlaylist');
import { setCurrentSong } from '../../actions';

describe('SongInfo', () => {
  describe('mapStateToProps', () => {
    it('should return an array of songs, a currentSong and currentCategory', () => {
      const mockState = {
        isLoading: false,
        setSongs: [
          {"title": "Don't Think Twice It's Alright",
            "artist": "Dylan, Bob"},
          {"title": "There's A Light That Never Goes Out",
            "artist": "Smiths, The"}
        ],
        otherThing: 'thing1',
        anotherThing: ['thing2'],
        setCurrentSong: {song: 'currentSong'},
        setCurrentCategory: '80s'
      }
      const expected = {
        songs: [
          {"title": "Don't Think Twice It's Alright",
            "artist": "Dylan, Bob"},
          {"title": "There's A Light That Never Goes Out",
            "artist": "Smiths, The"}
        ],
        currentSong: {song: 'currentSong'},
        currentCategory: '80s',
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should return fetchSongs as props to dispatch', () => {
      const mockDispatch = jest.fn();
      const fetchSongs = jest.fn();
      const actionToDispatch = fetchSongs('www.songs.com');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchSongs('www.songs.com');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should return sendToPlaylist as props to dispatch', () => {
      const mockDispatch = jest.fn();
      const sendToPlaylist = jest.fn();
      const actionToDispatch = sendToPlaylist({song: 'a song to send'});
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.sendToPlaylist({song: 'a song to send'});
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should return setCurrentSong as props to dispatch', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setCurrentSong({song: 'some song'});
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCurrentSong({song: 'some song'});
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});