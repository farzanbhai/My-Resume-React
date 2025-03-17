// src/components/ThemeWrapper.js
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeWrapper = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    // Update the data-theme attribute on the <html> element
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]); // Re-run this effect whenever isDarkMode changes

  return <>{children}</>;
};

export default ThemeWrapper;