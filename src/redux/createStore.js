import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducer from './ducks/User';
import pageReducer from './ducks/Page';
import sideDrawerReducer from './ducks/SideDrawer';

const reducers = combineReducers({
  routing: routerReducer,
  user: userReducer,
  page: pageReducer,
  sideDrawer: sideDrawerReducer
})

// Redux config
const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);

export default store;