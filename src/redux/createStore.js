import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';

import userReducer from './ducks/User';

const reducers = combineReducers({
  //routing: routerReducer,
  user: userReducer
})

// Redux config
const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);

export default store;