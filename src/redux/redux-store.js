import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import startDataReducer from './startDataReducer.js';
import rickReducer from './rickReducer.js';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  startData: startDataReducer,
  rickData: rickReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

window.store = store; // for development

export default store;
