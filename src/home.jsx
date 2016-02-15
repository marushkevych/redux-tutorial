import React from 'react'
import store from './store'
import * as actionCreators from './action-creators'

export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {data: store.getState().data}

    store.subscribe(() => {
      if(store.getState().data !== this.state.data){
        console.log('store updated' )
        this.setState({data: store.getState().data})
      }
    })
  }

  onTimeButtonClick () {
    actionCreators.getTime()
  }

  render () {
    var {time, frozen} = this.state.data
    console.log('Home.render()', time, frozen)

    var attrs = {}
    if (frozen) {
      attrs = {
        disabled: true
      }
    }

    var message = frozen ? 'Please wait...' : ''

    return (
      <div>
          <h3>Provider and connect example</h3>
          <button {...attrs} onClick={() => this.onTimeButtonClick()}>Get time!</button> {message}
          <h4>{time}</h4>
      </div>
    )
  }
}