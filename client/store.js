import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/index';
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware  } from 'react-router-redux';
import { combineReducers } from 'redux'

export const history = createHistory();
const middleWare = routerMiddleware(history);

export const store = createStore(
  combineReducers({
    ...appReducers,
    router: routerReducer
  }),
  applyMiddleware(middleWare)
)