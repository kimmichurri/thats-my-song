import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer';
import { setSongsReducer } from './setSongsReducer';
import { setCurrentSongReducer } from'./setCurrentSongReducer';
import { setCurrentCategoryReducer } from './setCurrentCategoryReducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  setSongs: setSongsReducer,
  setCurrentSong: setCurrentSongReducer,
  setCurrentCategory: setCurrentCategoryReducer
});

export default rootReducer;