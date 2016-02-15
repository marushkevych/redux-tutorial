export function data (state = {time: ''}, action){

  console.log('reducer is called wiht', state, action)

  switch (action.type) {
    case 'GET_TIME_REQUEST':
      return {
        ...state,
        frozen: true
      }

    case 'GET_TIME_SUCCESS':
      return {
        ...state,
        frozen: false,
        time: action.result
      }

    case 'GET_TIME_FAILURE':
      return {
        ...state,
        frozen: false,
        error: action.error
      }
  }

	return state
}