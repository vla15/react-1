import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/containers/App.jsx';
import styles from './scss/application.scss';
import { store, history } from '../store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);