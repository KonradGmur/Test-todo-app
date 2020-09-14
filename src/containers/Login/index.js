import React, { Component } from "react";
import { SubmitButton } from "../../helpers/theme";

class Login extends Component {
  render() {
    return (
      <div>
        <p>You must login to view page</p>
        <SubmitButton>Facebook login</SubmitButton>
      </div>
    );
  }
}

export default Login;
