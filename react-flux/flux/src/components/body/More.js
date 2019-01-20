import React, { Component } from 'react'

export default class More extends Component {
  constructor (props) {
    super(props)
    let numb = parseInt(props.match.params.number, 10)
    console.log(numb)
  }
  render () {
    return (
      <div>
        This is the more page
      </div>
    )
  }
}
