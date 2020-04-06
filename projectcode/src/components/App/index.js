import React, { Component } from "react";
import * as ROUTES from "../../constants/routes";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navigation from "../Navigation";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import PasswordForget from "../PasswordForget";

import { withAuthentication } from "../Session";

class App extends Component {
  isLoggedIn = () => {
    return !!this.props.auth;
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <div className="container">
            <Switch></Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default withAuthentication(App);
