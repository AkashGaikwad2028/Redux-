import {combineReducers} from 'redux';
import reducer from './Redux/ApiReducer';

const rootReducer = combineReducers({
  users: reducer,
});

export default rootReducer;