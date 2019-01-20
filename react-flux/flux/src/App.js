import React, { Component } from 'react'
import Header from './components/headers/Header'
import Main from './components/body/Main'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App
