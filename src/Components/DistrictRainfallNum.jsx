
import { Container, Box, Grid } from '@mui/material';


export function RainfallBox( {district, rainfall}) {
  return(
    <>
      <div style= {{
        width: '26%',
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
            {`${ rainfall ? rainfall: "null" }`}
          </h2>

      </div>
    </>
  )
}


function DistrictRainfallNum( {currentWeather, loading, error} ) {

  if (loading) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '840px' }}>
        <h2>Loading...</h2>;
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '840px' }}>
        <h2>Error: </h2>;
        <p>{error}</p>
      </div>
    )
  }

  if (!currentWeather ) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '840px' }}>
        <h2>No weather data available.</h2>;
      </div>
    )
  }

  console.log(`"DistrictRainfallNum: `)
  console.log(currentWeather)
  const { rainfall } = currentWeather;
  const { data } = rainfall; 

  return (
    <>
    <div style={{ background: '#212121', width: '100%', height: '840px', border: '2px solid #2196f3', marginTop: '20px', borderRadius: '8px' }}>
      <h2 style={{ paddingLeft: '8px' }}>
        {`Current Districts Rainfall(mm)`}
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        maxWidth: '600px',
      }}>

        {data.map((item, index) => (
          <RainfallBox key={index} district={item.place} rainfall={item.max.toString()} />
        ))}

      </div>


    </div>
    </>
  )
}
    
export default DistrictRainfallNum