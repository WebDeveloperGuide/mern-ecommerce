import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function AuthRoute({ component: Component, ...rest }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  let isAdmin = 0;
  if (userInfo){
    isAdmin = userInfo.data[0].isAdmin;
  }
  
  return (
    <Route
      {...rest}
      component={(props) => {
        if (userInfo && isAdmin) {
          return <Redirect to={`/dashboard`} />;          
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
}

export default AuthRoute;
