import {createStore} from 'redux'

var reducer = function (state = {}, action) {
	console.log('reducer is calle wiht', state, action)

  return state;
}

var store = createStore(reducer)

console.log('store state after initialization', store.getState())