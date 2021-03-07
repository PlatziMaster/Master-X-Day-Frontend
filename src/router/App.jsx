import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { useStateValue } from "../context";
import { getToken } from "../context/actions";
import Dashboard from "../containers/Dashboard/";
import BoardConfirm from "../containers/BoardConfirm";
import Login from "../containers/Login/";
import Onboarding from "../containers/Onboarding/";
import Staticts from "../containers/Staticts";
import Cards from "../containers/Cards/Cards";

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
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/statics" component={Staticts} />
        <Route exact path="/" component={!token ? Login : Dashboard} />
        <Route exact path="/boardconfirm" component={BoardConfirm}/>
        <Route exact path="/cards/:idList" component={Cards} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
