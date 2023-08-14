// store/reducers/index.js
import { combineReducers } from 'redux';
import apiReducer from '../apiReducer';


const rootReducer = combineReducers({
  api: apiReducer,
});

export default rootReducer;
