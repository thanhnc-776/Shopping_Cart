import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
// Store
import { createStore } from 'redux';
import myReducer from './reducer';
import { Provider } from 'react-redux';
const store = createStore(myReducer);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
