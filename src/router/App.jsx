import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../containers/Layout/";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
