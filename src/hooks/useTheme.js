import { dark } from "@mui/material/styles/createPalette";
import { useEffect, useState } from "react";

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme")=== "dark");
  
  const toggleTheme = () => {
    const htmlElement = document.querySelector("#body");
    if (darkMode) {
      htmlElement.classList["remove"]("dark");
      htmlElement.classList["add"]("light-mode");
    } else {
      htmlElement.classList["remove"]("light-mode");
      htmlElement.classList["add"]("dark");
    }

    const newTheme = darkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
  
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("#body");
    const theme = localStorage.getItem("theme");
    setDarkMode(theme === "dark");
    if (theme === "light") {
      htmlElement.classList.add("light-mode");
    } else if (theme === "dark") {
      htmlElement.classList.add("dark");
    }
  }, [])
  return { darkMode, toggleTheme };
}
