// src/components/ThemeToggle.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;