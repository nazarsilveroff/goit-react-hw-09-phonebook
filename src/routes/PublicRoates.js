import React from "react";
import { Redirect, Route } from "react-router";
const PublicRoates = ({ path, exact, component, auth, restricted }) => {
  return auth && restricted ? (
    <Redirect to="/phonebook" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoates;
