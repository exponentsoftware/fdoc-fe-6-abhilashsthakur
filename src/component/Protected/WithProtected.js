import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoginContext } from "../loginContext";

function WithProtected({ component: Component, ...rest }) {
  // eslint-disable-next-line
  const [status, setStatus] = useContext(LoginContext);
  // const isAuth = Auth;
  return (
    <Route
      {...rest}
      render={(props) =>
        status === 201 ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/user" }} />
        )
      }
    />
  );
}

export default WithProtected;
