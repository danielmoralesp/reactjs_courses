import React, { Component } from 'react';
import Welcome from './Welcome.js';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      title: "Hola mundo desde el estado",
      tasks: ["Tarea 1", "Tarea 2"]
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
        <ul>
          {this.state.tasks.map(task =>
            <li>{task}</li>
          )}
        </ul>
        <button onClick={this.addTask.bind(this)}>Agregue un elemento</button>
        <button onClick={this.updateTask.bind(this)}>Modificar tarea 2</button>
      </div>
    );
  }

  changeTitle(){
    this.setState({
      title: "Nuevo titulo"
    });
  }

  addTask(){
    this.setState({
      tasks: this.state.tasks.concat("Nuevo elemento")
    })
  }

  updateTask(){
    const index = this.state.tasks.findIndex(task =>
      task == "Tarea 2"
    );

    this.setState({
      tasks: this.state.tasks.map((task, i) =>
        i == index ? "Actualizado" : task
      )
    })
  }
}

export default App;
