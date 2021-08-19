import React from "react";
import { SignupSchema } from "./schema";
import { Formik, Form, Field, ErrorMessage } from "formik";

import PropTypes from "prop-types";

const propTypes = {
  handleSignup: PropTypes.func.isRequired,
};

const defaultProps = {};

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            // console.log(values);
            this.props.handleSignup(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
              <Field name="password" type="password" />
              <ErrorMessage name="password" />
              <button type="submit">Signup</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

SignupForm.propTypes = propTypes;
SignupForm.defaultProps = defaultProps;
