import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);

  const getPortfolioJSON = async () => {
    // fetch the data from the server and return it as a JSON object
    const response = await fetch(
      "https://gist.githubusercontent.com/teobot/456263a4fd09e457b3e2d6a42e2e5647/raw/portfolio.json"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  // Buttons colors
  const buttonColours =
    "red orange yellow olive green teal blue violet purple pink brown grey black facebook instagram linkedin twitter vk youtube".split(
      " "
    );

  // Options for the main index screen
  const styleOptions = {
    BUTTON_SIZE: "large",
    SKILL_STYLE_TEXT: {
      fontSize: 24,
      fontWeight: "bold",
    },
    BULLET_POINT_COLOR: "#434850",
    INTERNAL_LINKS_OPTIONS: {
      height: 275,
      ratio: [1, 1.8],
    },
  };

  // Return home screen path data
  const returnHomeJSON = (title, path, color) => {
    return { path, title, color };
  };

  useEffect(() => {
    getPortfolioJSON().then((data) => setPortfolioData(data));
  }, []);

  return (
    <DataContext.Provider
      value={{ portfolioData, buttonColours, styleOptions }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
