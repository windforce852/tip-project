import { useState, useEffect } from 'react';

const useGovCurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentWeather = async () => {

      const apiUrl = import.meta.env.VITE_TEST_HKGOV_CURRENT_WEATHER_API
      const mockURL = '/mockCurrentWeather.json'

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log("useGovCurrentWeather Data:")
        // console.log(data)
        setCurrentWeather(data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    }

    fetchCurrentWeather();


  }, [])

  return { currentWeather, loading, error };
}

export default useGovCurrentWeather