import {createStore, combineReducers} from 'redux'

var userReducer = function (state = {}, action) {
	console.log('userReducer is calle with', state, action)

  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      };
  }

  return state;
}

var itemReducer = function (state = [], action) {
  console.log('itemReducer is calle with', state, action)

  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ];
  }

  return state;
}

var reducer = combineReducers({
  user: userReducer,
  items: itemReducer
})

var store = createStore(reducer)

console.log('store state before action', store.getState())

var setNameActionCreator = function (name) {
  return {
    type: 'SET_NAME',
    name
  }
}

store.dispatch(setNameActionCreator('Bob'));

console.log('store state after action', store.getState())

