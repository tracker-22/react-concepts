import React, { Component } from 'react'

class Increment extends Component {

increment = (type) => {
    this.props.handleChange(type)
}

  render() {
    return (
        <button onClick={(e) => this.increment('increment')}>Increment(+)</button>
    )
  }
}

export default Increment