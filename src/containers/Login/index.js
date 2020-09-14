import React, { Component } from "react";
import { SubmitButton } from "../../helpers/theme";

class Login extends Component {
  state = {
    processing: false,
  };

  fbLogin = () => {
    this.setState({ processing: true });
    window.FB.getLoginStatus((response) => {
      console.log(response);
      if (response.status !== "connected") {
        window.FB.login();
      } else {
        window.FB.api("/me", (user) => {
          console.log(user);
        });
      }
    });
  };
  render() {
    return (
      <div>
        <p>You must login to view page</p>
        {this.state.processing ? (
          <div>Authenticating...</div>
        ) : (
          <SubmitButton ocClick={this.fbLogin}>Facebook login</SubmitButton>
        )}
      </div>
    );
  }
}

export default Login;
