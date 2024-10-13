// src/components/ForecastDisplay.js

import React from 'react';
import '../styles/ForecastDisplay.css';

function ForecastDisplay({ forecastData }) {
  if (!forecastData) return null;

  return (
    <div className="forecast-display">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {forecastData.map((day) => {
          const date = new Date(day.Date).toLocaleDateString();
          const maxTemp = Math.round(day.Temperature.Maximum.Value);
          const minTemp = Math.round(day.Temperature.Minimum.Value);
          const iconNumber = String(day.Day.Icon).padStart(2, '0');
          const iconUrl = `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`;
          const description = day.Day.IconPhrase;

          return (
            <div key={day.Date} className="forecast-card">
              <p>{date}</p>
              <img src={iconUrl} alt={description} />
              <p>
                {maxTemp}°C / {minTemp}°C
              </p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastDisplay;
