// Force the fileloader to load index.html
import 'file-loader?name=[name].[ext]!./index.html';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'; 
import ReactRoot from './components/ReactRoot';
import store from './redux/createStore'

if (!Config) {
  console.error('Config does not exist! ', process.env.NODE_ENV)
}

const history = syncHistoryWithStore(createBrowserHistory(), store);

// Render root
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={ReactRoot} />
    </Router>
  </Provider>,
  document.getElementById('reactRoot')
);