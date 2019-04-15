import { mapStateToProps, mapDispatchToProps } from './Selections';
jest.mock('../../thunks/fetchSongs');
import { setCurrentCategory, setCurrentSong } from '../../actions';

describe('Selections', () => {
  describe('mapStateToProps', () => {
    it('should return songs and current category as props', () => {
      const mockState = {
        setSongs: [{song: 'a'}, {song: 'b'}],
        setCurrentCategory: '90s',
        otherThing: 'thing1',
        anotherThing: ['thing2']
      }
      const expected = {
        songs: [{song: 'a'}, {song: 'b'}],
        currentCategory: '90s'
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should return fetchSongs to dispatch', () => {
      const mockDispatch = jest.fn();
      const fetchSongs = jest.fn();
      const actionToDispatch = fetchSongs('www.songs.com');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchSongs('www.songs.com');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should return setCurrentCategory as props to dispatch', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setCurrentCategory('90s');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCurrentCategory('90s');
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