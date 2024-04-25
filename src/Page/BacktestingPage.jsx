import { Container, Box, Grid } from '@mui/material';
import DateSelector from '../Components/DateSelector';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import FloodProbability24hr from '../Components/FloodProbaility24hr';
import Last7DaysRainfallChart from '../Components/Last7DaysRainfallChart';
import Last30DaysRainfallChart from '../Components/Last30DaysRainfallChart';

function BacktestingPage() {

    return (
      <>
      <div>
        <h1>BacktestingPage</h1>
        <Container>

          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateSelector/>
              </LocalizationProvider>
            </Grid>
          </Grid>


          
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FloodProbability24hr/>
            </Grid>


          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Last7DaysRainfallChart/>
            </Grid>

            <Grid item xs={12} md={8}>
              <Last30DaysRainfallChart/>
            </Grid>
          </Grid>

        </Container>
      </div>
      </>
    )
  }
  
  export default BacktestingPage