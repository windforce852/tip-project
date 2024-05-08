
import { Container, Box, Grid } from '@mui/material';


export function RainfallBoxHor( {district, rainfall}) {
  return(
    <>
      <div style= {{
        width: '18%',
        height: '110px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'start',
        border: '2px solid #2196f3',
        borderRadius: '8px',
        padding: '4px',
        overflow: 'hidden',
        whiteSpace: 'pre-wrap',
      }}>
          <p style= {{
            marginBlockStart: '0',
            marginBlockEnd: '0'
          }}>
            {`${ district ? district : "district" }`}
          </p>
          <h2 style= {{
            marginBlockStart: '0',
            marginBlockEnd: '0'
          }}>
            {`${ rainfall ? rainfall: "rainfall" }`}
          </h2>

      </div>
    </>
  )
}


function DistrictRainfallNumHor( {currentWeather, loading, error} ) {

  if (loading) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '600px' }}>
        <h2>Loading...</h2>;
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '600px' }}>
        <h2>Error: </h2>;
        <p>{error}</p>
      </div>
    )
  }

  if (!currentWeather ) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '600px' }}>
        <h2>No weather data available.</h2>;
      </div>
    )
  }

  console.log(`"DistrictRainfallNum: ${currentWeather}`)
  const { rainfall } = currentWeather;
  const { data } = rainfall; 

  return (
    <>
    <div style={{ background: '#212121', width: '100%', height: '600px', border: '2px solid #2196f3', marginTop: '20px', borderRadius: '8px' }}>
      <h2 style={{ paddingLeft: '8px' }}>
        {`Districts Rainfall(mm)`}
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        maxWidth: '1000px',
      }}>

        {data.map((entry, index) => (
          <RainfallBoxHor key={index} district={entry.place} rainfall={entry.max} />
        ))}

      </div>


    </div>
    </>
  )
}
    
export default DistrictRainfallNumHor