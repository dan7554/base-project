import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';

import loginReducer from './ducks/Login';

export default combineReducers({
  //routing: routerReducer,
  login: loginReducer
});