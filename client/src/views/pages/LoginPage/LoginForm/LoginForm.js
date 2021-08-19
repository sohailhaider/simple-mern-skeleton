import React from "react";
import { LoginSchema } from "./schema";
import { Formik, Form, Field, ErrorMessage } from "formik";

import PropTypes from "prop-types"

const propTypes = {
  handleLogin: PropTypes.func.isRequired
};

const defaultProps = {};

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            // console.log(values);
            this.props.handleLogin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
              <Field name="password" type="password" />
              <ErrorMessage name="password" />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

LoginForm.propTypes = propTypes;
LoginForm.defaultProps = defaultProps;
