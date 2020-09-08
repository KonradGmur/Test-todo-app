import React, { Component } from "react";
import ToDoList from "./containers/ToDoList/index";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ToDoEditForm from "./components/ToDoEditForm/index.js";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={ToDoList} />
        <Route path="/servers/:itemId" component={ToDoEditForm} />
      </Router>
    );
  }
}

export default App;
