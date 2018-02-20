import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

class App extends Component {
  constructor(props) {
    // Al tener un constructor en su componente de clase ES6, es obligatorio llamar a super();
    // porque el componente de la aplicación es una subclase de componente. Por lo tanto,
    // el Componente Extiende en su declaración del componente de App
    super(props)

    // Establece this.props en tu constructor en caso de que quieras acceder a ellos en el
    // constructor. De lo contrario, al acceder a this.props en su constructor, no estarían
    // definidos
    this.state = {
      list
    }
  }

  render() {
    const helloWorld = 'Welcome to the road to learn React'
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        {this.state.list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        ))}
      </div>
    )
  }
}

export default App