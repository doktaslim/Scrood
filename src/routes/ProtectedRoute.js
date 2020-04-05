import React from "react";
import { Route, Redirect } from "react-router-dom";
import { HOME } from "./router";

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      render={props =>
        authenticated ? <Component {...props} /> : <Redirect to={HOME} />
      }
      {...rest}
    />
  );
};

export default ProtectedRoute;
