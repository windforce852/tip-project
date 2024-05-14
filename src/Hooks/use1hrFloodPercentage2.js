import { useState, useEffect } from 'react';


//This hook call gov current weather, find out the max rainfall district, convert it to percentage

const use1hrFloodPercentage2 = () => {
  const [currentPercentage, setCurrentPercentage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch1hrPercentage = async () => {

      const apiUrl = import.meta.env.VITE_TEST_HKGOV_CURRENT_WEATHER_API
      const mockURL = '/mockCurrentWeather.json'

      try {
        const response = await fetch(apiUrl);
        const responseData = await response.json();
        // console.log("use1hrFloodPercentage Data:");
        // console.log(responseData);

        const { rainfall } = responseData;

        if (rainfall && rainfall.data) {
            const { data } = rainfall;

            let maxRainfall = 0

            for (const item of data) {
                const { max } = item;
                if (max > maxRainfall) {
                    maxRainfall = max
                }
            }
            console.log(`maxRainfall: ${maxRainfall}`)

            setCurrentPercentage(maxRainfall);
            setLoading(false);
        }
      } catch (error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    }

    fetch1hrPercentage();


  }, [])

  return { currentPercentage, loading, error };
}

export default use1hrFloodPercentage2