import React, { useContext } from "react";

import { useHistory } from "react-router-dom";

import { Menu, Dropdown, Checkbox, Icon } from "semantic-ui-react";

import { ThemeContext } from "../context/ThemeContext";

export default function NavBar({ project_title }) {
  const { darkMode, theme, toggleDarkMode } = useContext(ThemeContext);

  let history = useHistory();

  return (
    <Menu
      inverted={true}
      style={{
        backgroundColor: theme.navbarColor,
        margin: 0,
        borderRadius: 0,
        zIndex: 1,
      }}
    >
      <Menu.Item
        icon="home"
        onClick={() => {
          history.push("/");
        }}
      ></Menu.Item>

      {project_title ? <Menu.Item>{project_title}</Menu.Item> : null}

      <Menu.Menu position="right">
        {project_title ? (
          <Menu.Item
            onClick={() => {
              history.goBack();
            }}
          >
            Go Back
          </Menu.Item>
        ) : null}
        <Dropdown item icon="wrench" simple>
          <Dropdown.Menu>
            <Dropdown.Header>Settings</Dropdown.Header>
            <Dropdown.Item>
              <Checkbox
                toggle
                label="Dark Mode"
                fitted
                checked={darkMode}
                onClick={toggleDarkMode}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
