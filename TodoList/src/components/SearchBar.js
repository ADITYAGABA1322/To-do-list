import React from 'react';
import './SearchBar.css';

function SearchBar({ setSearchTerm, darkMode, setDarkMode }) {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button className="all-button">ALL</button>
      <button className="mode-button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '👁️' : '🌙'}
      </button>
    </div>
  );
}

export default SearchBar;