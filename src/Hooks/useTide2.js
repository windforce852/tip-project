import { useState, useEffect } from "react";

function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
    });
  }
  

const useTide2 = () => {
  const [tideData, setTideData] = useState([]);  // Stores all tide data
  const [currentTide, setCurrentTide] = useState(null);  // Stores current tide value
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetch('/tide.csv')
      .then(response => response.text())
      .then(text => {
        const parsedData = parseCSV(text);
        setTideData(parsedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading the tide data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const updateTide = () => {
      const now = new Date();
      const month = (now.getMonth() + 1).toString().padStart(2, '0');
      const date = now.getDate().toString().padStart(2, '0');
      const hour = now.getHours();
      const formattedHour = (hour === 0 ? '24' : hour).toString().padStart(2, '0');

      const todayTide = tideData.find(row => row.MM === month && row.DD === date);
      if (todayTide) {
        setCurrentTide(todayTide[formattedHour]);
      } else {
        setCurrentTide('No tide data available');
      }
    };

    const interval = setInterval(updateTide, 1000 * 60 * 60);  // update hourly
    updateTide();  // also run immediately

    return () => clearInterval(interval);
  }, [tideData]);  // Only re-run this effect if tideData changes

  return { tideNum: currentTide, loading, error };

}

export default useTide2;