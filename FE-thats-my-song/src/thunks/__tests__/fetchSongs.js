import { fetchSongs } from '../fetchSongs';
import { isLoading, setSongs, setFetchError } from '../../actions';

describe('fetchSongs', () => {
  let mockUrl;
  let mockDispatch;
  let mockSongs;

  beforeEach(() => {
    mockUrl= 'www.somesongs.com';
    mockDispatch = jest.fn();
    mockSongs = [
      {
        "id": 63303,
        "title": "Don't Think Twice It's Alright",
        "artist": "Dylan, Bob"
      },
      {
        "id": 68158,
        "title": "There's A Light That Never Goes Out",
        "artist": "Smiths, The"
      }
    ]
  });

  it('should dispatch setFetchError if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }));
    const thunk = fetchSongs(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setFetchError('Something went wrong'));
  });

  it('calls dispatch with isLoading(true)', () => {
    const thunk = fetchSongs(mockUrl);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('calls dispatch with setSongs and isLoading(false) if the response is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockSongs)
    }));
    const thunk = await fetchSongs(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setSongs(mockSongs));
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });


});