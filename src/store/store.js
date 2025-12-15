import { createStore, applyMiddleware, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';


const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;