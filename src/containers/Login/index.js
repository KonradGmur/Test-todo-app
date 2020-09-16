import React, { Component } from "react";
import { SubmitButton } from "../../helpers/theme";
import { Redirect } from "react-router-dom";
import { CurrentUserConsumer } from "../../context/CurrentUser.context";

class Login extends Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    return (
      <CurrentUserConsumer>
        {{ user }}
        <div>
          <p>You must login to view page {from.pathname}</p>

          {this.state.processing ? (
            <div>Authenticating...</div>
          ) : (
            <SubmitButton ocClick={this.fbLogin}>Facebook login</SubmitButton>
          )}
        </div>
      </CurrentUserConsumer>
    );
  }
}

export default Login;
