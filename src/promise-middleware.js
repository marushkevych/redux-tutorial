import Promise from 'bluebird'

export default ({ dispatch, getState }) => next => action => {
  if(action.promise == null) {
    return next(action)
  }

  next({
    type: action.type + '_REQUEST'
  })

  action.promise
    .then(result => {
      next({
        type: action.type + '_SUCCESS',
        result
      })
    })
    .catch(error => {
      next({
        type: action.type + '_FAILURE',
        error
      })
    })

} 