import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const names = ["pedro", "juan", "daniel"];
    return (
      <div>
        <h1>Hola Mundo</h1>
        <p>Hola</p>
        <ul>
          {names.map(name =>
            <li>{name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
