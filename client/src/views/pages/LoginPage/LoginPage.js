import React from "react";
import { loginUser } from "../../../apis/users";
import {
  navigateToDashboard,
  navigateToSignup,
} from "../../../utilities/navigation-helper";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../../store/slices/loginSlice";
// import PropTypes from "prop-types"

const propTypes = {};

const defaultProps = {};

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    try {
      const user = await loginUser(values.email, values.password);
      dispatch(setLoggedIn(user));
      navigateToDashboard();
    } catch (e) {
      if (e.response && e.response.data) alert(e.response.data);
      else console.log(e.message);
    }
  };
  return (
    <React.Fragment>
      <LoginForm handleLogin={handleLogin} />

      <button onClick={navigateToSignup}>Creat an account Now</button>
    </React.Fragment>
  );
};
export default LoginPage;

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;
