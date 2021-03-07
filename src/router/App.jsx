import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import OnBoarding from "../containers/Onboarding/";
import Dashboard from "../containers/Dashboard/";
import Login from "../containers/Login/";
import BoardConfirm from "../containers/Onboarding/";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/board-confirm" component={BoardConfirm} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/onboarding" component={OnBoarding} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
