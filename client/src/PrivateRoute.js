import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
function PrivateRoute({ children, ...rest }) {
  const isLogin = useSelector((state) => state.login.isLogin);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          <div>{children}</div>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
