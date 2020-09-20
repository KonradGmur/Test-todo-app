import React, { Component, lazy, Suspense } from "react";
import ToDoList from "./containers/ToDoList/index";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import ToDoEditForm from "./components/ToDoEditForm/index";
import Login from "./containers/Login/index";
import NotFound from "./components/NotFound/index";
import { Redirect } from "react-router-dom";
import Navbar from "./containers/Navbar/index";
import {
  CurrentUserProvider,
  CurrentUserConsumer,
} from "./context/CurrentUser.context";

const Stats = lazy(() => import("./containers/Stats/index"));

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
    render={(props) => (
      <CurrentUserConsumer>
        {({ user }) =>
          user ? (
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
      </CurrentUserConsumer>
    )}
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <CurrentUserProvider>
            <Container>
              <Navbar />
              <Switch>
                <Route exact path="/" component={ToDoList} />
                <PrivateRoute
                  exact
                  path="/servers/:itemId"
                  component={ToDoEditForm}
                />
                <Route component={NotFound} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/stats" component={Stats} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </CurrentUserProvider>
        </Suspense>
      </Router>
    );
  }
}

export default App;
