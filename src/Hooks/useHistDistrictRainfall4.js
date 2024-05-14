import { useState, useEffect } from 'react';

const useHistDistrictRainfall4 = (dateString) => {

  const districtMapping = {
    "Hong Kong International Airport": ["Islands District"],
    "Hong Kong Observatory": ["Yau Tsim Mong"],
    "Kai Tak": ["Kowloon City", "Wong Tai Sin", "Kwun Tong"],
    "Sha Tin": ["Sha Tin"],
    "Sham Shui Po": ["Sham Shui Po"],
    "Shau Kei Wan": ["Eastern District"],
    "Sheung Shui": ["North District"],
    "Tai Mei Tuk": ["Tai Po"],
    "The Peak": ["Wan Chai", "Central & Western District", "Southern District"],
    "Tsah Yue Wu": ["Sai Kung"],
    "Tsing Yi": ["Kwai Tsing"],
    "Tsuen Wan": ["Tsuen Wan"],
    "Tuen Mum Children And Juvenile Home": ["Tuen Mun"],
    "Wet Land Park": ["Yuen Long"],
    "Average_Rainfall": ["Average Rainfall"]
  };

  const [rainfallData, setRainfallData] = useState([]);
  const [loading4, setLoading4] = useState(true);
  const [error4, setError4] = useState(null);


  useEffect(() => {
    const fetchData = async () => {

      console.log(`hook4: dateString: ${dateString}`)

      const jsonData = '/districtRainfall-2023-08to09.json'

      try {
        const response = await fetch(jsonData);
        const data = await response.json();

        const inputDate = new Date(dateString);
        const year = inputDate.getFullYear();
        const month = inputDate.getMonth() + 1; 
        const day = inputDate.getDate();
        console.log(`hook4 - year: ${year}`)
        console.log(`hook4 - month: ${month}`)
        console.log(`hook4 - day: ${day}`)

        const matchingData = data.find(entry => entry.Year === year && entry.Month === month && entry.Day === day);

        if (matchingData) {
          console.log('hook4: data matched')

          const transformedData = {};
          Object.keys(districtMapping).forEach(station => {
            districtMapping[station].forEach(district => {
              transformedData[district] = matchingData[station] || 0;
            });
          });

          setRainfallData(transformedData);
        } else {
          console.log('hook4: data not match')
          setRainfallData([]);
        }
        setLoading4(false);
      } catch (error) {
        setError4(`Error fetching data: ${error}`);
        setLoading4(false);
      }
    }

    fetchData();
  }, [dateString])

  return { rainfallData, loading4, error4 };
}

export default useHistDistrictRainfall4;