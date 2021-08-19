import React from "react";
import { loginUser } from "../../../apis/users";
import {
  navigateToDashboard,
  navigateToSignup,
} from "../../../utilities/navigation-helper";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../../../store/slices/loginSlice";
import { Redirect } from "react-router-dom";
// import PropTypes from "prop-types"

const propTypes = {};

const defaultProps = {};

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);

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
      {isLogin ? (
        <Redirect
          to={{
            pathname: "/dashboard",
          }}
        />
      ) : (
        <div>
          <LoginForm handleLogin={handleLogin} />
          <button onClick={navigateToSignup}>Creat an account Now</button>
        </div>
      )}
    </React.Fragment>
  );
};
export default LoginPage;

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;
