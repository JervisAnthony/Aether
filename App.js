import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';
import Footer from './components/Footer';
import './styles/styles.css'; // Main stylesheet

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = (location) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY; // Ensure your API key is stored securely
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=5&units=metric&appid=${apiKey}`;

    // Fetch current weather
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData(data);
        } else {
          alert('Location not found');
        }
      })
      .catch((err) => console.error(err));

    // Fetch forecast data
    fetch(forecastURL)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === '200') {
          setForecastData(data.list);
        } else {
          console.error('Forecast data not available');
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} />
      <ForecastDisplay forecastData={forecastData} />
      <Footer />
    </div>
  );
}

export default App;
