import React from "react";
import { navigateToLogin } from "../../../utilities/navigation-helper";
import SignupForm from "./SignupForm";
// import PropTypes from "prop-types"

const propTypes = {};

const defaultProps = {};

export default class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSignup = this.handleSignup.bind(this);
  }
  handleSignup = (values) => console.log("in signup handler", values);
  render() {
    return (
      <React.Fragment>
        <SignupForm handleSignup={this.handleSignup} />
        <button onClick={navigateToLogin}>Back to Login</button>
      </React.Fragment>
    );
  }
}

SignupPage.propTypes = propTypes;
SignupPage.defaultProps = defaultProps;
