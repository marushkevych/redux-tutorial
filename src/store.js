import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from './promise-middleware'
import logMiddleware from './log-middleware'
import thunk from 'redux-thunk';
import * as reducers from './reducers'


export default createStore(combineReducers(reducers), applyMiddleware(thunk, promiseMiddleware, logMiddleware))