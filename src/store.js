import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from './promise-middleware'
import logMiddleware from './log-middleware'
import * as reducers from './reducers'


export default createStore(combineReducers(reducers), applyMiddleware(promiseMiddleware, logMiddleware))