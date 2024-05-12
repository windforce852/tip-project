
import { Container, Box, Grid } from '@mui/material';
import WeatherApp from '../Components/WeatherApp';
import FloodInstruction from '../Components/FloodInstruction';
import FloodWarningDisplay from '../Components/FloodWarningDisplay';

function LandingPage() {

  return (
    <>
      <div style={{ marginBottom: '40px', marginTop: '60px'}} >
        {/* <h1>LandingPage</h1> */}
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <WeatherApp/>
            </Grid>

            <Grid item xs={12} md={4}>
              <FloodWarningDisplay />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FloodInstruction/>
            </Grid>
          </Grid>
        </Container>
      </div>
      </>
    )
  }
  
  export default LandingPage