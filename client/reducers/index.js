import * as counterReducers from './counterReducer'
import * as bogusReducers from './bogusReducer';

const reducers = Object.assign({}, counterReducers, bogusReducers)

export default reducers
