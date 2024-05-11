import { Container, Box, Grid } from '@mui/material';
import FloodInstruction from '../Components/FloodInstruction';
import EmailSetting from '../Components/EmailSetting';

function CitizenHomePage() {

    return (
      <>
      <div>

       <h1>Citizen Home Page</h1>
        <Container> 
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <EmailSetting/>
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
  
  export default CitizenHomePage