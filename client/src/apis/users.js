import axios from "axios";
import { userLoginEndPoint, userSignupEndPoint } from "../utilities/api-routes";

export const loginUser = async (email, password) => {
  const response = await axios.post(userLoginEndPoint, { email, password });
  return response.data;
};

export const signupUser = async (email, password) => {
  const response = axios.post(userSignupEndPoint, { email, password });
  return response.data;
};
