export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  isLoading: boolean
});

export const setSongs = (songs) => ({
  type: 'SET_SONGS',
  songs
});

export const setCurrentSong = (song) => ({
  type: 'SET_CURRENT_SONG',
  song
});

export const setCurrentCategory = (category) => ({
  type: 'SET_CURRENT_CATEGORY',
  category
});