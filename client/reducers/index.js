import * as counterReducers from './counterReducer'
import * as campaignReducers from './campaignReducer';

const reducers = Object.assign({}, counterReducers, bogusReducers)

export default reducers
