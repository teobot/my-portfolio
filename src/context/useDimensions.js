/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";

export default () => {
  // This hook returns the window dimensions
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleWindowSizeChange = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return { windowWidth, windowHeight };
};
