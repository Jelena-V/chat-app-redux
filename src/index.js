import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './helpers/reducer';

import App from './App';

import './styles/index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
