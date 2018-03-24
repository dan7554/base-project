// Force the fileloader to load index.html
import 'file-loader?name=[name].[ext]!./index.html';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import ReactRoot from './components/ReactRoot';
import store from './redux/createStore'

if(!Config) {
  console.error('Config does not exist!', process.env.NODE_ENV)
}

// Render root
ReactDOM.render(
  <Provider store={store}>
    <ReactRoot />
  </Provider>,
  document.getElementById('reactRoot')
);