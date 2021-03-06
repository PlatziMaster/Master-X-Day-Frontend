import React from "react";
import ReactDOM from "react-dom";
import { Provider } from './context';
import { Router } from "react-router";
import { createBrowserHistory } from 'history'
import App from "./router/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const initialState = { token: '' }
const history = createBrowserHistory();

ReactDOM.render(
  <Provider initialState={initialState}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
