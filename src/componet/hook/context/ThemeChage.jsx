import { createContext, useContext, useState } from "react";
// first step to create context in react
let ThemeContext = createContext();
const ThemeChange = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const contextValue = { theme, toggleChange };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeChange;

export const Themebutton = () => {
  const { theme, toggleChange } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleChange}
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      theme change button
    </button>
  );
};
