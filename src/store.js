import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, window.STATE_FROM_SERVER);

export default store;
