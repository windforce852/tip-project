import { useState, useEffect } from 'react';

// Custom hook that mounted on <WeatherApp/>, it will fire when WeatherApp render
// It will fetch the Open Weather API in a async manner, store the returned json to weatherData for parsing in WeatherApp
// API doc: https://openweathermap.org/forecast5
// Use Postman to test the API to understand what JSON format it returned
const useWeather = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {

      const city = "hongkong"
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_TEST_OPEN_WEATHER_API_KEY}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    };

    fetchWeather();

    }, []);

    return { weatherData, loading, error };
};

export default useWeather;
