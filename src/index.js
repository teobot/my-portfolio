import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProjectsScreen from "./screens/ProjectsScreen";
import ProjectViewScreen from "./screens/ProjectViewScreen";
import MainScreen from "./screens/MainScreen";

import useThemeContext, { ThemeContext } from "./context/ThemeContext";
import useWindowDimensions, { WindowContext } from "./context/useDimensions";
import { DataProvider } from "./context/DataContext";

import "./css/index.css";

const Index = () => {
  const [ThemeContextValues] = useThemeContext();
  const [WindowDimensionsValues] = useWindowDimensions();
  return (
    <DataProvider>
      <WindowContext.Provider value={WindowDimensionsValues}>
        <ThemeContext.Provider value={ThemeContextValues}>
          <div
            id="routy"
            style={{
              backgroundColor: ThemeContextValues.theme.backgroundColor,
            }}
          >
            <Router>
              <Switch>
                <Route path="/p/:id">
                  <ProjectViewScreen />
                </Route>
                <Route path="/projects">
                  <ProjectsScreen />
                </Route>
                <Route>
                  <MainScreen />
                </Route>
              </Switch>
            </Router>
          </div>
        </ThemeContext.Provider>
      </WindowContext.Provider>
    </DataProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
