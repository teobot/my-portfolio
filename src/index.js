import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./css/index.css";

import App from "./screens/App";
import Project from "./screens/Project";

import useDarkModeContext, { DarkModeContext } from "./context/ThemeContext";

const Index = () => {
  const [ThemeContextValues] = useDarkModeContext();
  return (
    <DarkModeContext.Provider value={ThemeContextValues}>
      <Router>
        <Switch>
          <Route path="/p/:id">
            <Project />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </DarkModeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
