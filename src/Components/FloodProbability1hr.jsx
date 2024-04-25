
import { Container, Box, Grid } from '@mui/material';
import use1hrFloodPercentage from '../Hooks/use1hrFloodPercentage';

function FloodProbability1hr() {

  const { currentPercentage, loading, error } = use1hrFloodPercentage();

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

  if (!currentPercentage ) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '200px', borderRadius: '8px' }}>
        <h2>No data available.</h2>;
      </div>
    )
  }

  const { percentage } = currentPercentage;

  const returnColor = (num) => {
    if (num >= 0 && num <= 29) {
      return "#1de9b6"
    }
    if (num >= 30 && num <= 49) {
      return "#ffcf33"
    }
    if (num >= 50 && num <= 99) {
      return "#ff9100"
    }
    if (num >= 100) {
      return "#ff1744"
    }
    if (num <0 ) {
      return "#636363"
    }
  }

  const displayColor = returnColor(percentage)

  return (
    <>
    <div style={{ background: '#212121', width: '100%', height: '200px', borderRadius: '8px' , marginTop: '20px'}}>
      <h2 style={{paddingTop: '8px', paddingLeft: '8px'}}>Flood Probability in 1hr</h2>
      {/* <p>{`Flood Percentage in 1 hr - ${percentage}`}</p> */}
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
              {`${percentage}%`}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
    
export default FloodProbability1hr