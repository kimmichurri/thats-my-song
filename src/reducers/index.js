import { combineReducers } from 'redux';
import { isLoadingReducer } from './isLoadingReducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer
});

export default rootReducer;