// Force the fileloader to load index.html
import 'file-loader?name=[name].[ext]!./index.html';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import ReactRoot from './components/ReactRoot';
import combineReducers from './redux/reducer'

// Redux config
const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);
const store = createStore(combineReducers, middleware);

// Render root
ReactDOM.render(
  <Provider store={store}>
    <ReactRoot />
  </Provider>,
  document.getElementById('reactRoot')
);