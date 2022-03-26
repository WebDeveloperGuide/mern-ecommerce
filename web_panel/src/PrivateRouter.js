import React from "react";
import {useSelector} from 'react-redux';
import { Redirect, Route } from "react-router-dom";

function PrivateRouter({ component: Component, ...rest }) {
  const userInfo = useSelector((state)=> state.userPanelLogin.userInfo);
  let token = 0;
  if(typeof userInfo !== 'undefined' && userInfo !== null){
    token = userInfo.token;
  }
  return (
    <Route
      {...rest}
      component={(props) => {        
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
}

export default PrivateRouter;
