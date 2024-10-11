// src/components/WeatherDisplay.js

import React from 'react';
import '../styles/WeatherDisplay.css'; // Updated import path

function WeatherDisplay({ weatherData }) {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p className="temperature">{Math.round(main.temp)}°C</p>
      <p className="description">{weather[0].description}</p>
      <div className="additional-info">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
