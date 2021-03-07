import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useStateValue } from "../context";
import { getToken } from "../context/actions";
import OnBoarding from "../containers/Onboarding/";
import Dashboard from "../containers/Dashboard/";
import Login from "../containers/Login/";
import BoardConfirm from "../containers/Onboarding/";
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
        <Route exact path="/board-confirm" component={BoardConfirm} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/onboarding" component={OnBoarding} />
        <Route exact path="/statics" component={Staticts} />
        <Route exact path="/" component={!token ? Login : Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
