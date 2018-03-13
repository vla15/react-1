import * as counterReducers from './counterReducer'
import * as bogusReducers from './bogusReducer';

const appReducers = Object.assign({}, counterReducers, bogusReducers)

export default appReducers;
