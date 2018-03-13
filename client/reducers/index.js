import { combineReducers } from 'redux';
import counterReducer from './counterReducer'
import bogusReducer from './bogusReducer';

const appReducers = combineReducers({counterReducer, bogusReducer});

export default appReducers;
