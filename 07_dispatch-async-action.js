import {createStore, combineReducers} from 'redux'

var reducer = function (state = {}, action) {
	console.log('userReducer is calle with', state, action)

  switch (action.type) {
    case 'SAY':
      return {
        ...state,
        message: action.message
      };
  }

  return state;
}


var store = createStore(reducer)

var sayActionCreator = function (message) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch({ type: 'SAY', message });
    }, 2000)
  };
}

store.dispatch(sayActionCreator('Hi'))

console.log('store state after action', store.getState())