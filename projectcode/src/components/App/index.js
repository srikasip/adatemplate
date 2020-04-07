import React, { Component } from "react";
import * as ROUTES from "../../constants/routes";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navigation from "../Navigation";

import { withAuthentication } from "../Session";
// [APP IMPORTS GO HERE]
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
            <Switch>{/* [APP ROUTES GO HERE] */}</Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default withAuthentication(App);
