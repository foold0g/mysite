import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to={routes.SIGN_IN}>Sign In</Link>
          </li>
          <li>
            <Link to={routes.LANDING}>Landing</Link>
          </li>
          <li>
            <Link to={routes.HOME}>Home</Link>
          </li>
          <li>
            <Link to={routes.ACCOUNT}>Account</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavigationBar;
