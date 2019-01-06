// Force the fileloader to load index.html
import 'file-loader?name=[name].[ext]!./index.html'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history' 
import Root from './components/Root/Root'
import store from './redux/createStore'
import DevbarWrapper from './components/DevbarWrapper/DevbarWrapper'

if (!Config) {
  console.error('Config does not exist! ', process.env.NODE_ENV)
}

const history = syncHistoryWithStore(createBrowserHistory(), store)

// Render root
ReactDOM.render(
  <DevbarWrapper store={store}>
    <Provider store={store}>
      <Root history={history} />
    </Provider>
  </DevbarWrapper>
  ,
  document.getElementById('reactRoot')
)