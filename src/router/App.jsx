import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import { useStateValue } from "../context";
import { getToken } from "../context/actions";
import OnBoarding from "../containers/Onboarding/";
import Dashboard from "../containers/Dashboard/";
import BoardConfirm from "../containers/BoardConfirm";
import Login from "../containers/Login/";
<<<<<<< HEAD
import BoardConfirm from "../containers/Onboarding/";
import Staticts from "../containers/Staticts";
=======
>>>>>>> 8311d1ba91b1a3f6470ab4b40d25d012f02a6544

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
<<<<<<< HEAD
        <Route exact path="/statics" component={Staticts} />
        <Route exact path="/" component={!token ? Login : Dashboard} />
=======
        <Route exact path="/boardconfirm" component={BoardConfirm}/>
        <Route path="/" component={Login} />
>>>>>>> 8311d1ba91b1a3f6470ab4b40d25d012f02a6544
      </Switch>
    </BrowserRouter>
  );
};

export default App;
