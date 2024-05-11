import { useState, useEffect } from 'react';

const useEvacuationPoints = () => {
  const [points, setPoints] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPoints = async () => {

      const jsonUrl = '/evacuationPoints.json'

      try {
        const response = await fetch(jsonUrl);
        const data = await response.json();
        setPoints(data);
        setLoading(false);
      } catch(error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    }
    fetchPoints();
  }, [])

  return { points, loading, error };
}

export default useEvacuationPoints;