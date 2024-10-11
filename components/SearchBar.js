// src/components/SearchBar.js

import React, { useState } from 'react';
import '../styles/SearchBar.css'; // Updated import path

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city or ZIP code..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
