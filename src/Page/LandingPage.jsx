
import { Container, Box, Grid } from '@mui/material';
import WeatherApp from '../Components/WeatherApp';
import FloodInstruction from '../Components/FloodInstruction';
import FloodWarningDisplay from '../Components/FloodWarningDisplay';
import EvacuationPointsChoose from '../Components/EvacuationPointsChoose';

function LandingPage() {

  return (
    <>
      
      <div style={{ marginBottom: '40px', marginTop: '60px'}} >
        <Container>

          <Grid container spacing={2}>
              <p style={{backgroundColor:'#0d69fc', color: 'white', textAlign: 'center', width: '100%'}}>Register to receive most updated flood related information</p>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} s={12} md={8}>
              <WeatherApp/>
            </Grid>

            <Grid item xs={12} s={12} md={4}>
              <FloodWarningDisplay />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} s={12} md={12}>
              <FloodInstruction/>
            </Grid>

            <Grid item xs={12} s={12} md={12}>
              <EvacuationPointsChoose/>
            </Grid>

          </Grid>
        </Container>
      </div>
      </>
    )
  }
  
  export default LandingPage