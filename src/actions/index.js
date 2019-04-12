export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  isLoading: boolean
});

export const setSongs = (songs) => ({
  type: 'SET_SONGS',
  songs
});