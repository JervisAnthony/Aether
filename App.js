// src/App.js

import React, { useState } from 'react';
import './styles/App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import Footer from './components/Footer';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (location) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setForecastData(null);

    const apiKey = process.env.REACT_APP_ACCUWEATHER_API_KEY;

    // Step 1: Get Location Key
    const locationURL = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${encodeURIComponent(
      location
    )}`;

    fetch(locationURL)
      .then((res) => res.json())
      .then((locationData) => {
        if (locationData && locationData.length > 0) {
          const locationKey = locationData[0].Key;
          const cityName = locationData[0].LocalizedName;

          // Step 2: Get Current Conditions
          const conditionsURL = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;

          fetch(conditionsURL)
            .then((res) => res.json())
            .then((conditionsData) => {
              if (conditionsData && conditionsData.length > 0) {
                const currentConditions = conditionsData[0];

                // Step 3: Get 5-Day Forecast
                const forecastURL = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=true`;

                fetch(forecastURL)
                  .then((res) => res.json())
                  .then((forecastData) => {
                    if (forecastData && forecastData.DailyForecasts) {
                      setWeatherData({
                        cityName,
                        temperature: currentConditions.Temperature.Metric.Value,
                        weatherText: currentConditions.WeatherText,
                        weatherIcon: currentConditions.WeatherIcon,
                        humidity: currentConditions.RelativeHumidity,
                        windSpeed: currentConditions.Wind.Speed.Metric.Value,
                      });
                      setForecastData(forecastData.DailyForecasts);
                    } else {
                      setError('Forecast data not available.');
                    }
                  })
                  .catch((err) => {
                    setError('An error occurred while fetching forecast data.');
                    console.error(err);
                  });
              } else {
                setError('Current weather data not available.');
              }
            })
            .catch((err) => {
              setError('An error occurred while fetching current conditions.');
              console.error(err);
            })
            .finally(() => {
              setLoading(false);
            });
        } else {
          setError('Location not found.');
          setLoading(false);
        }
      })
      .catch((err) => {
        setError('An error occurred while fetching location data.');
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {weatherData && !error && (
        <>
          <WeatherDisplay weatherData={weatherData} />
          <ForecastDisplay forecastData={forecastData} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
