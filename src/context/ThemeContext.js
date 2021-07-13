import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export default () => {
  const [darkMode, setDarkMode] = useState(false);

  return [{ darkMode }];
};
