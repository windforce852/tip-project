import { useState, useEffect } from "react";
import Papa from "papaparse";

const useTide = () => {
  const [tideNum, setTideNum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const apiUrl = 'https://data.weather.gov.hk/weatherAPI/hko_data/tide/ALL_en.csv'

  //     try {
  //       const response = await fetch(apiUrl)
        

  //       const csvData = await response.text();
      
  //       const rows = csvData.split('\n');
  //       const headers = rows[0].split(',');
  //       const data = rows[1].split(',');
      
  //       const heightIndex = headers.indexOf('Height(m');
  //       const heightValue = data[heightIndex];
      
  //       setTideNum(heightValue);
  //       setLoading(false);
  //     } catch(error) {
  //       setError(`Error fetching data: ${error}`);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
    
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = 'https://data.weather.gov.hk/weatherAPI/hko_data/tide/ALL_en.csv'
      const apiUrl2 = 'https://cors-anywhere.herokuapp.com/https://data.weather.gov.hk/weatherAPI/hko_data/tide/ALL_en.csv';


      try {
        const response = await fetch(apiUrl)
        console.log('check1')
        // Check for successful response
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        console.log('check2')
        const csvData = await response.text();
        console.log(`csvData: ${csvData}`)

        Papa.parse(csvData, {
          complete: (results) => {
            const headers = results.data[0];
            const data = results.data[1];

            const heightIndex = headers.indexOf('Height(m');
            const heightValue = data[heightIndex];

            setTideNum(heightValue);
            setLoading(false);
          },
          error: (error) => {
            setError(`Error parsing CSV: ${error.message}`);
            setLoading(false);
          },
        });
      } catch(error) {
        setError(`Error fetching data: ${error}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { tideNum, loading, error }

}

export default useTide;