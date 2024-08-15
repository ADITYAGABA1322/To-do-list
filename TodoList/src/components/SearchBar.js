import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

function SearchBar({ setSearchTerm, darkMode, setDarkMode, handleFilterChange }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchInput, setSearchInput] = useState('');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    handleFilterChange(filter);
    setDropdownVisible(false);
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Search on Enter key press
        />
        <FaSearch className="search-icon" onClick={handleSearch} /> {/* Search on icon click */}
      </div>
      <div className="dropdown-container">
        <button
          className="all-button"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          {selectedFilter}
        </button>
        {dropdownVisible && (
          <div className="dropdown-list">
            <button
              className="dropdown-item"
              onClick={() => handleFilterClick('All')}
            >
              All
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleFilterClick('Completed')}
            >
              Completed
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleFilterClick('Incomplete')}
            >
              Incomplete
            </button>
          </div>
        )}
      </div>
      <button className="mode-button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌙' : '🌞'}
      </button>
    </div>
  );
}

export default SearchBar;
