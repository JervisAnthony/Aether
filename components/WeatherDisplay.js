// src/components/WeatherDisplay.js

import React from 'react';
import '../styles/WeatherDisplay.css';

function WeatherDisplay({ weatherData }) {
  if (!weatherData) return null;

  const {
    cityName,
    temperature,
    weatherText,
    weatherIcon,
    humidity,
    windSpeed,
  } = weatherData;

  const iconNumber = String(weatherIcon).padStart(2, '0'); // Ensure two-digit format
  const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`;

  return (
    <div className="weather-display">
      <h2>{cityName}</h2>
      <img src={iconUrl} alt={weatherText} />
      <p className="temperature">{Math.round(temperature)}°C</p>
      <p className="description">{weatherText}</p>
      <div className="additional-info">
        <p>Humidity: {humidity}%</p>
        <p>Wind: {windSpeed} km/h</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
