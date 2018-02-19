import React, { Component } from 'react'
import Welcome from './Welcome'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      title: 'Hola Mundo desde estado'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle.bind(this)}>Cambie el titulo</button>
      </div>
    )
  }

  changeTitle() {
    this.setState({
      title: 'nuevo titulo'
    })
  }
}

export default App
