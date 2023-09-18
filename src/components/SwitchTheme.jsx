import React from "react";

export default function SwitchTheme({ theme }) {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          value={theme.darkMode}
          checked={theme.darkMode}
          onChange={theme.toggleTheme}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
