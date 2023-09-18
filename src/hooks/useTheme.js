import { useState } from "react";

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    // document.body.className = isBackground1 ? 'background1' : 'background2';
    const htmlElement = document.querySelector("#body");
    const actionLight = htmlElement.classList.contains("light-mode") ? "remove" : "add";
    htmlElement.classList[actionLight]("light-mode");
    const actionDark = htmlElement.classList.contains("dark") ? "remove" : "add";
    htmlElement.classList[actionDark]("dark");
    setDarkMode(!darkMode);
  };

  return { darkMode, toggleTheme };
}
