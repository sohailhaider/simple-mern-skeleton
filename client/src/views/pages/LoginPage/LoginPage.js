import React from "react";
import { navigateToSignup } from "../../../utilities/navigation-helper";
import LoginForm from "./LoginForm";
// import PropTypes from "prop-types"

const propTypes = {};

const defaultProps = {};

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin = (values) => console.log("in handler", values);
  render() {
    return (
      <React.Fragment>
        <LoginForm handleLogin={this.handleLogin} />
        
        <button onClick={navigateToSignup}>Creat an account Now</button>
      </React.Fragment>
    );
  }
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;
