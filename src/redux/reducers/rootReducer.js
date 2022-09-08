import { combineReducers } from 'redux';
//reducers
import searchReducer from './searchReducer';
import paginatedReducer from './paginatedReducer';
import checkAvailabilityReducer from './checkAvailabilityReducer';

const rootReducer = combineReducers({
    searchReducer,
    paginatedReducer,
    checkAvailabilityReducer,
});

export default rootReducer;
