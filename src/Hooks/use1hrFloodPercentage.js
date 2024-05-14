import { useState, useEffect } from 'react';

const use1hrFloodPercentage = () => {
  const [currentPercentage, setCurrentPercentage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch1hrPercentage = async () => {

    //   const apiUrl = import.meta.env.VITE_TEST_1HR_FLOOD_API
      const mockURL = '/mock1hrFloodPercent.json'

      try {
        const response = await fetch(mockURL);
        const data = await response.json();
        // console.log("use1hrFloodPercentage Data:")
        // console.log(data)
        setCurrentPercentage(data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    }

    fetch1hrPercentage();


  }, [])

  return { currentPercentage, loading, error };
}

export default use1hrFloodPercentage