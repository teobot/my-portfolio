import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default () => {
  const [darkMode, setDarkMode] = useState(true);

  const lightTheme = {
    text: "black",
    backgroundColor: "white",
    navbarColor: "#2d333b"
  };

  const darkTheme = {
    text: "whitesmoke",
    backgroundColor: "#1c2128",
    navbarColor: "#2d333b"
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return [{ darkMode, theme: darkMode ? darkTheme : lightTheme, toggleDarkMode }];
};
