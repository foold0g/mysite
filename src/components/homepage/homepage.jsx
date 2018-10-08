import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "../navigationbar/navigationbar";
import Landing from "../landing/landing";
import SignUp from "../signup/signup";
import SignIn from "../signin/signin";
import ForgetPassword from "../forgetpassword/forgetpassword";
import Home from "../home/home";
import Account from "../account/account";
import Footer from "../footer/footer";

import * as Routes from "../../constants/routes";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Route exact path={Routes.SIGN_IN} component={SignIn} />
          <Route exact path={Routes.LANDING} component={Landing} />
          <Route exact path={Routes.HOME} component={Home} />
          <Route path={Routes.ACCOUNT} component={Account} />
          <Route exact path={Routes.SIGN_UP} component={SignUp} />
          <Route path={Routes.FORGET_PASSWORD} component={ForgetPassword} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default HomePage;
