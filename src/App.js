import React, { Component } from "react";
import "./App.css";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <ToDoList title="My app" />
    </div>
  );
}

export default App;
