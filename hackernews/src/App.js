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

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())

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
      list,
      searchTerm: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id
    const updatedList = this.state.list.filter(isNotId)
    this.setState({ list: updatedList })
  }

  render() {
    const { searchTerm, list } = this.state

    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search
          </Search>
        </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    )
  }
}

const Search = ({ value, onChange, children }) => {
  const helloWorld = 'Welcome to the road to learn React'

  return (
    <div>
      <h2>{helloWorld}</h2>
      <form>
        {children} <input type="text" value={value} onChange={onChange} />
      </form>
    </div>
  )
}

const Table = ({ list, pattern, onDismiss }) => (
  <div className="table">
    {list.filter(isSearched(pattern)).map(item => (
      <div key={item.objectID} className="table-row">
        <span style={{ width: '40%' }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ width: '30%' }}>{item.author}</span>
        <span style={{ width: '10%' }}>{item.num_comments}</span>
        <span style={{ width: '10%' }}>{item.points}</span>
        <span style={{ width: '10%' }}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    ))}
  </div>
)

class Button extends Component {
  render() {
    const { onClick, className = '', children } = this.props

    return (
      <button onClick={onClick} className={className} type="button">
        {children}
      </button>
    )
  }
}

export default App
