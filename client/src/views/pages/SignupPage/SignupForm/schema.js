import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  password: Yup.string().min(2, "Too Short!").required("Please Provide Password."),
  email: Yup.string().email("Invalid email").required("Please Provide Email address."),
});
