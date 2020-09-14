import React, { Component } from "react";
import ToDoList from "./containers/ToDoList/index";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import ToDoEditForm from "./components/ToDoEditForm/index";
import Login from "./containers/Login/index";
import NotFound from "./components/NotFound/index";
import { Redirect } from "react-router-dom";

const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`;

const PrivateRoute = ({ componet: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("currentUser") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={ToDoList} />
            <PrivateRoute
              exact
              path="/servers/:itemId"
              component={ToDoEditForm}
            />
            <Route component={NotFound} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
