import { combineReducers } from 'redux';
import changeAuth from './changeAuth';



const rootReducer = combineReducers({
  authenticated: changeAuth
});

export default rootReducer;
