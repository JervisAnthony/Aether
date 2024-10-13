// src/components/Footer.js

import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Aether</p>
      <p>
        Data provided by{' '}
        <a
          href="https://developer.accuweather.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AccuWeather
        </a>
      </p>
    </footer>
  );
}

export default Footer;
