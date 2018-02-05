import React, { Component } from 'react';
import Welcome from './Welcome.js';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      title: "Hola mundo desde el estado"
    }
  }

  render() {
    const names = ["pedro", "juan", "daniel"];
    return (
      <div>
        <div>
          <Welcome name="Pedro" />
          <Welcome name="Daniel" />
        </div>
        {names.map(name =>
          <Welcome name={name} />
        )}
        <p>Hola mundo normal</p>
        <p>Hola</p>
        <ul>
          {names.map(name =>
            <li>{name}</li>
          )}
        </ul>
        <h2>{this.state.title}</h2>
        <button onClick={this.changeTitle.bind(this)}>Cambie el titulo</button>
      </div>
    );
  }

  changeTitle(){
    this.setState({
      title: "Nuevo titulo"
    });
  }
}

export default App;
