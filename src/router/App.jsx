import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useStateValue } from "../context";
import { getToken } from "../context/actions";
import OnBoarding from "../containers/Onboarding/";
import Dashboard from "../containers/Dashboard/";
import Login from "../containers/Login/";
<<<<<<< HEAD
import BoardConfirm from "../containers/BoardConfirm";
=======
import Staticts from "../containers/Staticts";
>>>>>>> 14685be6a4e0b39a7a45ad7d0572403cb6892402

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
<<<<<<< HEAD
        <Route exact path="/boardconfirm" component={BoardConfirm}/>
=======
        <Route exact path="/statics" component={Staticts} />
>>>>>>> 14685be6a4e0b39a7a45ad7d0572403cb6892402
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
