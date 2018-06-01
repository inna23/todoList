import { combineReducers } from 'redux';
import taskList from './taskList';

const rootReducer = combineReducers(
  taskList,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default rootReducer;

