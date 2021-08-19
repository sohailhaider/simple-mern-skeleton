import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import MainLoader from "./components/MainLoader";
import PrivateRoute from "./PrivateRoute";
const DashboardPage = lazy(() => import("./views/pages/DashboardPage"));
const LoginPage = lazy(() => import("./views/pages/LoginPage"));
const SignupPage = lazy(() => import("./views/pages/SignupPage"));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<MainLoader />}>
        <PrivateRoute path="/dashboard">
          <DashboardPage />
        </PrivateRoute>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <PrivateRoute exact path="/">
          <DashboardPage />
        </PrivateRoute>
      </Suspense>
    </div>
  );
}

export default App;
