import React, { Component } from 'react';
import Welcome from './Welcome.js';
import './App.css';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
