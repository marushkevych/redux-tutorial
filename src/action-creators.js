import store from './store'

export function getTime () {

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