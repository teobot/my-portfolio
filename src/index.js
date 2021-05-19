import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./css/index.css";

import App from "./screens/App";
import Project from "./screens/Project";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/p/:id">
          <Project/>
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
