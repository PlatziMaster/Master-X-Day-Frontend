import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Auth from "../containers/auth";
import { useStateValue } from "../context";
import { getToken } from "../context/actions";
import OnBoarding from "../containers/Onboarding/";
import Dashboard from "../containers/Dashboard/";
import Login from "../containers/Login/";
import Staticts from "../containers/Staticts";

const App = () => {
  const { token, dispatch } = useStateValue();

  useEffect(() => {
    if (!token) {
      getToken({ dispatch });
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/onboarding" component={OnBoarding} />
        <Route exact path="/statics" component={Staticts} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
