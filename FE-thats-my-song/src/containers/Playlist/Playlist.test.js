import  { Playlist, mapStateToProps, mapDispatchToProps } from './Playlist';
import React from 'react';
import { shallow } from 'enzyme';
jest.mock('../../thunks/getFromPlaylist');

describe('Playlist', () => {
  let wrapper;
  const mockProps = {
    playlist: [{title: 'a song', artist: 'kim', id: 1}],
    getFromPlaylist: jest.fn()
  } 

  beforeEach(() => {
    wrapper = shallow(
      <Playlist 
        playlist={mockProps.playlist}
        getFromPlaylist={mockProps.getFromPlaylist}
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a playlist of songs', () => {
      const mockState = {
        randomThing: 1,
        anotherThing: 'two',
        setPlaylist: [{song: 'a'}, {song: 'b'}]
      }
      const expected = {
        playlist: [{song: 'a'}, {song: 'b'}]
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should return getFromPlaylist to dispatch', () => {
      const mockDispatch = jest.fn();
      const getFromPlaylist = jest.fn();
      const actionToDispatch = getFromPlaylist('www.playlist.com');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getFromPlaylist('www.playlist.com')
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});