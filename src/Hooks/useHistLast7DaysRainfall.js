import { useState, useEffect } from 'react';

  const useHistLast7DaysRainfall = () => {
  const [rainfallMM, setRainfallMM] = useState([]);
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRainfall = async () => {

    //   const apiUrl = import.meta.env.VITE_TEST_HKGOV_CURRENT_WEATHER_API
      const mockURL = 'mockHist7daysRainfall.json'

      try {
        const response = await fetch(mockURL);
        const data = await response.json();
        console.log("useHistLast7DaysRainfall Data:")
        console.log(data)

        const rainfallValues = data.rainfall_data.map(item => item.rainfall_mm);
        const formattedDates = data.rainfall_data.map(item => item.date.substring(5).replace('-', ''));

        console.log("rainfallMM data:", rainfallValues);
        console.log("Formatted dates:", formattedDates);

        setRainfallMM(rainfallValues);
        setDates(formattedDates);

        setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    }

    fetchRainfall();


  }, [])

  return { rainfallMM, dates, loading, error };
}

export default useHistLast7DaysRainfall