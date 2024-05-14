
import { Container, Box, Grid } from '@mui/material';
import use24hrFloodPercentage from '../Hooks/use24hrFloodPercentage';

function FloodProbability24hr3({ currentWeather, loading, error }) {

  // const { currentWeather, loading, error } = use24hrFloodPercentage();

  if (loading) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '200px', borderRadius: '8px' }}>
        <h2>Loading...</h2>;
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '200px', borderRadius: '8px' }}>
        <h2>Error: </h2>;
        <p>{error}</p>
      </div>
    )
  }

  if (!currentWeather) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '200px', borderRadius: '8px' }}>
        <h2>No data available.</h2>;
      </div>
    )
  }

  const getHighestPercentage = (weatherData) => {
    const values = Object.entries(weatherData).filter(([key, value]) => key !== "Average Rainfall");
    const maxPercentage = Math.max(...values.map(([key, value]) => value));
    return maxPercentage;
  }

  const percentage = getHighestPercentage(currentWeather);

  const adjust = (inputPercentage) => {
    if (inputPercentage > 99) {
      return 99;
    } else {
      return inputPercentage;
    }
  }

  const adjustedPercentage = adjust(percentage)

  const returnColor = (num) => {
    if (num >= 0 && num <= 29) {
      return "#1de9b6"
    }
    if (num >= 30 && num <= 49) {
      return "#ffcf33"
    }
    if (num >= 50 && num <= 75) {
      return "#ff9100"
    }
    if (num >= 76) {
      return "#ff1744"
    }
    if (num < 0) {
      return "#636363"
    }
  }

  const displayColor = returnColor(adjustedPercentage)

  return (
    <>
      <div style={{ background: '#212121', width: '100%', height: '200px', borderRadius: '8px', marginTop: '20px' }}>
        <h2 style={{ paddingTop: '8px', paddingLeft: '8px' }}>Flood Probability in 24hr</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '8px',
            backgroundColor: displayColor,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <p style={{
              fontSize: '50px',
              fontWeight: 'bold',
              marginBlockStart: '0',
              marginBlockEnd: '0'
            }}>
              {`${adjustedPercentage}%`}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FloodProbability24hr3