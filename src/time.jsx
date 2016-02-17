import React from 'react'
import { connect } from 'react-redux'

class Time extends React.Component {

  render () {
    console.log('Time.render()')
    return <h4>{this.props.time}</h4>
  }
}

function mapStateToProps (state) {
  return {time: state.data.time}
}



export default connect(mapStateToProps)(Time)
