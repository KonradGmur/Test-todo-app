import React, { Component } from "react";
import "./App.css";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.tasks.map((task) => (
          <div>
            <p>{task}</p>
          </div>
        ))}
        <input type="text" />
      </div>
    );
  }
}

class App extends Component {
  myTask = ["Record a ReactJS video", "Go for a walk"];
  render() {
    return (
      <div>
        <ToDoList title="My app" tasks={this.myTasks} />
      </div>
    );
  }
}

export default App;
