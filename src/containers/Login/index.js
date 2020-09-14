import React, { Component } from "react";
import { SubmitButton } from "../../helpers/theme";

class Login extends Component {
  state = {
    processing: false,
    currentUser: null,
  };

  fbLogin = () => {
    this.setState({ processing: true });
    window.FB.getLoginStatus((response) => {
      if (response.status !== "connected") {
        window.FB.login();
      } else {
        window.FB.api("/me", (user) => {
          this.setState({ processing: false, currentUser: user });
        });
      }
    });
  };
  render() {
    const { currentUser, processing } = this.state;
    return (
      <div>
        {currentUser ? (
          <div>Hello, {currentUser.name}!</div>
        ) : (
          <p>You must login to view page</p>
        )}

        {processing ? (
          <div>Authenticating...</div>
        ) : (
          <SubmitButton ocClick={this.fbLogin}>Facebook login</SubmitButton>
        )}
      </div>
    );
  }
}

export default Login;
