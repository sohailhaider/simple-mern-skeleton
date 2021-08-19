import React from "react";
import { loginUser } from "../../../apis/users";
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
  handleLogin = async (values) => {
    console.log("in handler", values);
    try {
      const user = await loginUser(values.email, values.password);
      console.log("login success", user);
    } catch (e) {
      if (e.response && e.response.data) alert(e.response.data);
      else console.log(e.message);
    }
  };
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
