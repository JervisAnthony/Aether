// src/components/ForecastDisplay.js

import React from 'react';
import '../styles/ForecastDisplay.css'; // Updated import path

function ForecastDisplay({ forecastData }) {
  if (!forecastData) return null;

  return (
    <div className="forecast-display">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {forecastData.map((day) => (
          <div key={day.dt} className="forecast-card">
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <p>{Math.round(day.temp.day)}°C</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastDisplay;
