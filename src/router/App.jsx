import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../containers/Layout/";
import Auth from "../containers/auth";
import { useStateValue } from "../context";
import { getToken } from "../context/actions";

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
        <Route exact path="/" component={Layout} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
