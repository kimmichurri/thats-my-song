import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer';
import { setSongsReducer } from './setSongsReducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  setSongs: setSongsReducer
});

export default rootReducer;