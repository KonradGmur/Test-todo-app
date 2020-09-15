import React, { Component } from "react";

const CurrentUserContext = React.createContext();

export class CurrentUserProvider extends Component {
  state = {
    user: null,
  };

  login = () => {
    this.setState({ user: { name: "Artur" } });
  };

  logout = () => {
    this.setState({ user: null });
  };
}
