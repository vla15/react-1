import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware  } from 'react-router-redux';
import { combineReducers } from 'redux'

export const history = createHistory();
const middleWare = routerMiddleware(history);

export const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleWare)
)