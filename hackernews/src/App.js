import React, { Component } from 'react'
import './App.css'

const DEFAULT_QUERY = 'redux'
const DEFAULT_HPP = '100'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='
const PARAM_HPP = 'hitsPerPage='
// const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}`

class App extends Component {
  constructor(props) {
    super(props)

    // 1- Estado inicial, nulo para result, y searchTerm con DEFAULT_QUERY const
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    }

    // 2- Bindeo los metodos/funciones
    this.setSearchTopStories = this.setSearchTopStories.bind(this)
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
  }

  // 3 - Metodo set, para setear el resultado de la busqueda, con setState
  setSearchTopStories(result) {
    const { hits, page } = result

    const oldHits = page !== 0 ? this.state.result.hits : []

    const updatedHits = [...oldHits, ...hits]

    this.setState({ result: { hits: updatedHits, page } })
  }

  // 4- Methodo fecth/get con el que traigo los resultados en json de la busqueda nativa
  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(e => e)
  }

  // 5- metodo que se ejecuta despues de montado el componente, el searchTerm
  // tiene un estado, y se le pasa al metodo fetch/get
  componentDidMount() {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  // 6- server side rendering para buscar en la API de hacker news
  onSearchSubmit(event) {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
    event.preventDefault()
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id
    const updatedHits = this.state.result.hits.filter(isNotId)
    this.setState({
      result: { ...this.state.result, hits: updatedHits }
    })
  }

  render() {
    const { searchTerm, result } = this.state
    const page = (result && result.page) || 0

    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        {result && <Table list={result.hits} onDismiss={this.onDismiss} />}
        <div className="interactions">
          <Button
            onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}
          >
            More
          </Button>
        </div>
      </div>
    )
  }
}

const Search = ({ value, onChange, onSubmit, children }) => {
  const helloWorld = 'Welcome to the road to learn React'

  return (
    <div>
      <h2>{helloWorld}</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">{children}</button>
      </form>
    </div>
  )
}

const Table = ({ list, pattern, onDismiss }) => (
  <div className="table">
    {list.map(item => (
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
