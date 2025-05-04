import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for dark mode
const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';  // Default to false if not found
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode to body when state changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
}, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};