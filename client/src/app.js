import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/containers/App.jsx';
import styles from './scss/application.scss';
import store from '../store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
