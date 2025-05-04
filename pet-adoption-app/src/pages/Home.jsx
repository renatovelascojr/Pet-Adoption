import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import ThemeToggleButton from './ThemeToggleButton';

const Home = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  return (
    <div className={darkMode ? 'dark-mode-container' : 'light-mode-container'}>
      {/* Top Nav */}
      <div className="top-nav">
        <ThemeToggleButton />
      </div>

      {/* Hero Section */}
      <div className="hero">
        <h1>Find your new best friend</h1>
        <div className="hero-buttons">
        <button onClick={() => navigate('/adopt?type=dog')}>Dogs</button>
        <button onClick={() => navigate('/adopt?type=cat')}>Cats</button>
        <button onClick={() => navigate('/adopt?type=shelter')}>Shelters & Rescues</button>
        <button onClick={() => navigate('/adopt')}>All</button>
        </div>
      </div>
    </div>
  );
};

export default Home;