import { createStore } from 'redux';
import appReducers from './reducers/index';

const store = createStore(appReducers, {});

export default store;