import { combineReducers } from 'redux';

import bookReducer from './book';
import filterReducer from './filter';

const rootReducer = combineReducers({
  bookReducer,
  filterReducer,
});

export default rootReducer;
