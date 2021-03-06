import React from "react";
import { Redirect, Route } from "react-router";
const PrivateRoute = ({ path, exact, component, auth }) => {
  return auth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
