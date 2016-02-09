import {createStore, combineReducers} from 'redux'

var userReducer = function (state = {}, action) {
	console.log('userReducer is calle with', state, action)

  switch (action.type) {
    case 'SAY_SOMETHING':
      return {
        ...state,
        message: action.value
      };
  }

  return state;
}

var itemReducer = function (state = [], action) {
  console.log('itemReducer is calle with', state, action)

  switch (action.type) {
    case 'SAY_SOMETHING':
      return {
        ...state,
        message: action.value
      };
  }

  return state;
}

var reducer = combineReducers({
  user: userReducer,
  items: itemReducer
})

var store = createStore(reducer)

console.log('store state after initialization', store.getState())