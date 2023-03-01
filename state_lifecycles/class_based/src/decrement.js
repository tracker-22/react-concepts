import React, { Component } from 'react'

class Decrement extends Component {

decrement = (type) => {
    this.props.handleChange(type)
   
}

  render() {
    return (
        <button onClick={(e) => this.decrement('decrement')}>Decrement(-)</button>
    )
  }
}

export default Decrement