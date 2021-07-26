import React, { useContext } from "react";

import { useHistory } from "react-router-dom";

import { Menu, Dropdown, Checkbox, Icon } from "semantic-ui-react";

import { ThemeContext } from "../context/ThemeContext";

export default function NavBar() {
  const { darkMode, theme, toggleDarkMode } = useContext(ThemeContext);

  let history = useHistory();
  return (
    <Menu
      inverted={darkMode}
      style={{
        backgroundColor: theme.navbarColor,
        margin: 0,
        borderRadius: 0,
      }}
    >
      <Menu.Item
        icon="home"
        onClick={() => {
          history.push("/");
        }}
      ></Menu.Item>

      <Menu.Menu position="right">
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
