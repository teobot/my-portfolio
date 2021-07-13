import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./screens/App";
import Project from "./screens/Project";

import useThemeContext, { ThemeContext } from "./context/ThemeContext";

const Index = () => {
  const [ThemeContextValues] = useThemeContext();
  console.log(ThemeContextValues);
  return (
    <ThemeContext.Provider value={ThemeContextValues}>
      <div
        style={{ backgroundColor: ThemeContextValues.theme.backgroundColor }}
      >
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
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
