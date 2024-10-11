// src/components/Footer.js

import React from 'react';
import '../styles/Footer.css'; // Updated import path

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aether</p>
      <p>
        Data provided by{' '}
        <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
          OpenWeatherMap
        </a>
      </p>
    </footer>
  );
}

export default Footer;
