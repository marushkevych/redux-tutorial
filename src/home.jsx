import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './action-creators'

class Home extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {data: store.getState().data}

  //   store.subscribe(() => {
  //     if(store.getState().data !== this.state.data){
  //       this.setState({data: store.getState().data})
  //     }
  //   })
  // }

  // onTimeButtonClick () {
  //   this.props.dispatch(actionCreators.getTime())
  // }

  render () {
    var {time, frozen, error} = this.props.data

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
          <button {...attrs} onClick={this.props.actions.getTime}>Get time!</button> {message}
          <h4>{time}</h4>
          <h4>{error}</h4>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
