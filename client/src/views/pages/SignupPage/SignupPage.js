import React from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../../apis/users";
import { setLoggedIn } from "../../../store/slices/loginSlice";
import { navigateToDashboard, navigateToLogin } from "../../../utilities/navigation-helper";
import SignupForm from "./SignupForm";
// import PropTypes from "prop-types"

const propTypes = {};

const defaultProps = {};

const SignupPage = (props) => {
  const dispatch = useDispatch();

  const handleSignup = async (values) => {
    try {
      const user = await signupUser(values.email, values.password);
      alert("Signed Up Successfully, loggin in.")
      dispatch(setLoggedIn(user));
      navigateToDashboard();
    } catch (e) {
      if (e.response && e.response.data) alert(e.response.data);
      else console.log(e.message);
    }
  };
  // const handleSignup = (values) => console.log("in signup handler", values);
  return (
    <React.Fragment>
      <SignupForm handleSignup={handleSignup} />
      <button onClick={navigateToLogin}>Back to Login</button>
    </React.Fragment>
  );
};
export default SignupPage;

SignupPage.propTypes = propTypes;
SignupPage.defaultProps = defaultProps;
