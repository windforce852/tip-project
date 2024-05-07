import { useState, useEffect } from 'react';

const useDatasetList = () => {
  const [datasetList, setdatasetList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDatasetList = async () => {

    //   const apiUrl = import.meta.env.VITE_TEST_HKGOV_CURRENT_WEATHER_API
      const mockURL = '/mockDatasetList.json'

      try {
        const response = await fetch(mockURL);
        const data = await response.json();
        setdatasetList(data);
        setLoading(false);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    }

    fetchDatasetList();


  }, [])

  return { datasetList, loading, error };
}

export default useDatasetList