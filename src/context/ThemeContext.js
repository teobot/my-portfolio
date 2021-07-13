import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default () => {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = {
    text: "black",
    backgroundColor: "white",
  };

  const darkTheme = {
    text: "whitesmoke",
    backgroundColor: "#1c2128",
  };

  return [{ darkMode, theme: darkMode ? darkTheme : lightTheme }];
};
