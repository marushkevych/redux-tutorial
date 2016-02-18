export function data (state = {}, action){

  switch (action.type) {
    case 'GET_TIME_REQUEST':
      return {
        ...state,
        frozen: true,
        error: ''
      }

    case 'GET_TIME_SUCCESS':
      return {
        ...state,
        frozen: false,
        time: action.result,
        error: ''
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