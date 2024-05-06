import { useState, useEffect } from "react";

// Custom hook that mounted on <WeatherApp/>, it will fire when WeatherApp render
// It will fetch the Open Weather API in a async manner, store the returned json to weatherData for parsing in WeatherApp

// Use Postman to test the API to understand what JSON format it returned
const use1DayWeather = () => {
  const [OneDayweather, setOneDayWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiUrl =
        "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en";

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setOneDayWeather(data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { OneDayweather, loading, error };
};

export default use1DayWeather;
