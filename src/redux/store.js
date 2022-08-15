import { createStore } from 'redux';
import searchReducer from './reducers/searchReducer';

const store = createStore(searchReducer);

export default store;
