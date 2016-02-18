/**
 * Async action using promise middleware
 * see ./promise-middleware.js
 */
export function getTimeUsingPromise () {

  const promise =  new Promise((resolve, reject) => {
    setTimeout(function(){
      const d = new Date()
      const ms = ('000' + d.getMilliseconds()).slice(-3)
      resolve(`${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`)
      // reject('an error!')
    }, 2000)
  })

  return {
    type: 'GET_TIME',
    promise
  }
}

/**
 * Async action using thunk middleware
 * see https://www.npmjs.com/package/redux-thunk
 */
export function getTimeUsingThunk () {

  return dispatch => {
    dispatch({ type: 'GET_TIME_REQUEST' })

    setTimeout(function(){
      const d = new Date()
      const ms = ('000' + d.getMilliseconds()).slice(-3)

      dispatch({
        type: 'GET_TIME_SUCCESS',
        result: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`
      })

      // error
      // dispatch({
      //   type: 'GET_TIME_FAILURE',
      //   error: 'an error!'
      // })
    }, 2000)
  }

}