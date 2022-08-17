import { combineReducers } from 'redux';
//reducers
import searchReducer from './searchReducer';
import paginatedReducer from './paginatedReducer';

const rootReducer = combineReducers({
    searchReducer: searchReducer,
    paginatedReducer: paginatedReducer,
});

export default rootReducer