import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    const names = ['daniel', 'maria clara', 'catalina']
    return (
      <div>
        <h1>Hola mundo</h1>
        <ul>
          {names.map(name => {
            return <li>{name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
