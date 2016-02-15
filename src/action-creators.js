import store from './store'

export function getTime () {
	store.dispatch({
    type: 'GET_TIME_REQUEST'
  })

  setTimeout(function(){
    const d = new Date()
    const ms = ('000' + d.getMilliseconds()).slice(-3)
    store.dispatch({
      type: 'GET_TIME_SUCCESS',
      result: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`
    })
  }, 2000)
}