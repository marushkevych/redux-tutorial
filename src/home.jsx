import React from 'react'
import store from './store'
import * as actionCreators from './action-creators'

export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {data: store.getState().data}

    store.subscribe(() => {
      if(store.getState().data !== this.state.data){
        this.setState({data: store.getState().data})
      }
    })
  }

  onTimeButtonClick () {
    store.dispatch(actionCreators.getTime())
  }

  render () {
    var {time, frozen, error} = this.state.data

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
          <h4>{error}</h4>
      </div>
    )
  }
}