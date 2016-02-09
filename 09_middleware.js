import {createStore, applyMiddleware} from 'redux'

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

var thunkMiddleware = function ({ dispatch, getState }) {
    console.log('thunkMiddleware: enter');
    return function(next) {
        // console.log('Function "next" provided:', next);
        return function (action) {
            console.log('thunkMiddleware action received:', action);
            return typeof action === 'function' ?
                action(dispatch) :
                next(action)
        }
    }
}

function logMiddleware ({ dispatch, getState }) {
    console.log('logMiddleware: enter');
    return function(next) {
        return function (action) {
            console.log('logMiddleware action received:', action)
            return next(action)
        }
    }
}

const finalCreateStore = applyMiddleware(thunkMiddleware, logMiddleware)(createStore)

var store = finalCreateStore(reducer);

store.subscribe(function () {
  console.log('store has been updated:', store.getState())
});

var sayActionCreator = function (message) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch({ type: 'SAY', message });
    }, 2000)
  };
}



store.dispatch(sayActionCreator('Hi'))

console.log('store state after action', store.getState())