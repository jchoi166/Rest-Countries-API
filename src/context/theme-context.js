import React, { useState } from "react";

const ThemeContext = React.createContext({
  currentTheme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () =>
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
