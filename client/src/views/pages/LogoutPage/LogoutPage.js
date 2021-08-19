import React from "react";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../store/slices/loginSlice";
import { navigateToDashboard } from "../../../utilities/navigation-helper";

const LogoutPage = (props) => {
  const dispatch = useDispatch();
  dispatch(setLogout());
  navigateToDashboard();
  return <></>;
};

export default LogoutPage;
