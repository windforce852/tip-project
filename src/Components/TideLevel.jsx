import { Card, CardContent, Box, Typography } from "@mui/material";
import { useEffect } from 'react';
import useTide from "../Hooks/useTide";
import useTide2 from "../Hooks/useTide2";
import WaterIcon from '@mui/icons-material/Water';

function TideLevel() {
  const { tideNum, loading, error } = useTide2();
  
  if (loading) {
    return (
      <Card sx={{ background: "#2b838f", width: "100%", height: "250px"}}>
        <Typography variant="h4" style={{fontWeight: 'bold'}}>
          loading.. 
        </Typography>
      </Card>
    )
  }

  if (error) {
    return (
      <Card sx={{ background: "#2b838f", width: "100%", height: "250px"}}>
        <Typography variant="h4" style={{fontWeight: 'bold'}}>
          Error: 
        </Typography>
        <p>{error}</p>
      </Card>
    )
  }

  if (!tideNum) {
    return (
      <Card sx={{ background: "#2b838f", width: "100%", height: "250px"}}>
        <Typography variant="h4" style={{fontWeight: 'bold'}}>
          No data available.
        </Typography>
      </Card>
    )
  }


  return (
    <>
    <Card style={{ background: '#2b838f', width: '100%', height: '250px', paddingBlockStart: '5px'}}>
        <div style={{marginLeft: '15px', marginTop: '10px', height: '44%', width: '96%',}}>
          <h2 style={{fontSize: '28px', marginBlockStart: '0.16em'}}>Current Tide Level</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
            <WaterIcon style={{fontSize: '80px'}}/>
            <h2 style={{fontSize: '60px'}}>{`${tideNum}m`}</h2>
          </div>
        </div>
    </Card>

    {/* <Card sx={{ background: "#2b838f", width: "100%", height: "250px"}}>
      <Typography variant="h4" style={{fontWeight: 'bold'}}>Tide </Typography>

      <CardContent>
        
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center' 
        }}>
          <WaterIcon/>
          <h2>{`${tideNum}m`}</h2>
        </Box>
      </CardContent>
    </Card> */}
    </>
  )
}
      
export default TideLevel