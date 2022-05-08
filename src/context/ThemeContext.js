import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const values = {
    currentTheme,
    setCurrentTheme,
  };
  return <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>;
};

export default ThemeContext;
