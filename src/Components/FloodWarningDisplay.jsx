import { useState } from "react";
import { Grid } from "@mui/material";
import use1hrFloodPercentage2 from '../Hooks/use1hrFloodPercentage2';
import WaterIcon from '@mui/icons-material/Water';

function FloodWarningDisplay() {

  const [ isWarningRelease, setIsWarningRelease ] = useState(true)

  const { currentPercentage, loading, error } = use1hrFloodPercentage2();

  if (loading) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '500px', borderRadius: '8px' }}>
        <h2>Loading...</h2>;
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '500px', borderRadius: '8px' }}>
        <h2>Error: </h2>;
        <p>{error}</p>
      </div>
    )
  }

  if (currentPercentage === null || currentPercentage === undefined ) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '500px', borderRadius: '8px' }}>
        <h2>No data available.</h2>;
      </div>
    )
  }

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

  const displayColor = returnColor(currentPercentage)

  const DisplayPercentage = (num) => {
    if (num >= 80) {
      return num - 10
    } else {
      return num
    }
  }


  if (isWarningRelease === false){
    return (
      <>
        <Grid container sx={{background: '#212121', width: '100%', height: '500px', borderRadius: '8px'}}>

        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}><h2>Flood Probability</h2></div>

        <div style={{width: '100%', height: '100%', paddingLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '8px',
                backgroundColor: displayColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBlockEnd: '10em'
              }}>
                <p style={{ 
                  fontSize: '50px',
                  fontWeight: 'bold',
                  marginBlockStart: '0',
                  marginBlockEnd: '0'
                }}>
                    {`${DisplayPercentage(currentPercentage)}%`}
                </p>
            </div>

        </div>

        </Grid>
      </>
    )
  }


  if (isWarningRelease === true) {
    return(
      <>
      <Grid container sx={{background: '#d61334', width: '100%', height: '500px', borderRadius: '8px'}}>
        <div style={{width: '100%', height: '100%', paddingLeft: '20px', paddingRight: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <p style={{ 
            fontSize: '45px',
            fontWeight: 'bold',
            marginBlockStart: '0',
            marginBlockEnd: '0',
            textAlign: 'center'
          }}>
            FLOOD WARNING RELEASED
          </p>
          <WaterIcon style={{fontSize: '120px'}}/>
          <p style={{marginBlockEnd: '0px'}}>Stay safe, check the instruction</p>
          <p style={{marginBlockStart: '10px'}}>follow advice from emergency services</p>
        </div>
      </Grid>
      </>
    )
  }


}
  
export default FloodWarningDisplay