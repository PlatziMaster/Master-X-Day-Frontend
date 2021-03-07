import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { useStateValue } from "../context";
import { getToken } from "../context/actions";
import OnBoarding from "../containers/Onboarding/";
import Dashboard from "../containers/Dashboard/";
import BoardConfirm from "../containers/BoardConfirm";
import Login from "../containers/Login/";

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
        <Route exact path="/" component={!token ? Login : Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/onboarding" component={OnBoarding} />
        <Route exact path="/boardconfirm" component={BoardConfirm}/>
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
