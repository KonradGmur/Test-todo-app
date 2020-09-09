import React, { Component } from "react";
import ToDoList from "./containers/ToDoList/index";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ToDoEditForm from "./components/ToDoEditForm/index";
import styled from "styled-components";
import NotFound from "./components/NotFound/index";

const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={ToDoList} />
            <Route exact path="/servers/:itemId" component={ToDoEditForm} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
