import React, { Component } from 'react'

export default class todo extends Component {
  render() {
    return (
      <div>
        this is todo {this.props.text}
      </div>
    )
  }
}
