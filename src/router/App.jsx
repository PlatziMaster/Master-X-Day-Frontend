import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import OnBoarding from "../containers/Onboarding/";
import Dashboard from "../containers/Dashboard/";
import Login from "../containers/Login/";
import Cards from "../containers/Cards/Cards";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/onboarding" component={OnBoarding} />
        <Route exact path="/cards/:idList" component={Cards} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
