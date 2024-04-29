import { useState, useEffect } from 'react';

const useHistDistrictRainfall = () => {
  const [rainfall, setRainfall] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistDistrictRainfall = async() => {
      // const apiUrl = TODO
      const mockURL = '/mockHistDistrictRainfall.json'

      try {
        const response = await fetch(mockURL);
        const data = await response.json();
        console.log("useGovCurrentWeather Data:")
        console.log(data)
        setRainfall(data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    }
    fetchHistDistrictRainfall()
  }, [])

    return { rainfall, loading, error };
}

export default useHistDistrictRainfall;