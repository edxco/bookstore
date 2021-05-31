import { combineReducers } from 'redux';

import bookReducer from './book';
import filter from './filter'

const rootReducer = combineReducers({
  bookReducer,
  filter,
});

export default rootReducer;
