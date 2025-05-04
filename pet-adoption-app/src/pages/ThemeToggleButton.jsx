import React from 'react';
import { useDarkMode } from '../DarkModeContext';

const ThemeToggleButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      {darkMode ? '🌙 Dark Mode' : '🌞 Light Mode'}
    </button>
  );
};

export default ThemeToggleButton;