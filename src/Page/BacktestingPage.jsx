import { Container, Box, Grid } from '@mui/material';
import DateSelector from '../Components/DateSelector';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import FloodProbability24hr from '../Components/FloodProbaility24hr';
import Last7DaysRainfallChart from '../Components/Last7DaysRainfallChart';
import Last30DaysRainfallChart from '../Components/Last30DaysRainfallChart';
import useHistDistrictRainfall from '../Hooks/useHistDistrictRainfall';
import DistrictRainfallNum from '../Components/DistrictRainfallNum';
import DistrictRainfallMap from '../Components/DistrictRainfallMap';
import DatasetPanel from '../Components/DatasetPanel';
import DistrictRainfallNumHor from '../Components/DistrictRainfallNumHor';
import { Link } from 'react-router-dom';

function BacktestingPage() {

  const { rainfall, loading, error } = useHistDistrictRainfall();

    return (
      <>
      <div>
        <h1>BacktestingPage</h1>
        <div style={{marginBottom: '20px'}}>
          <Link to='/monitor'>Monitor Page</Link>  
        </div>
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

            <Grid item xs={12} md={6}>
              <DatasetPanel/>
            </Grid>
          </Grid>


          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Last7DaysRainfallChart/>
            </Grid>

            <Grid item xs={12} md={6}>
              <Last30DaysRainfallChart/>
            </Grid>
          </Grid>



          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <DistrictRainfallNumHor currentWeather={rainfall} loading={loading} error={error}/>
            </Grid>

            {/* <Grid item xs={12} md={8} style={{ width: "100%", height: "100%" }}>
              <DistrictRainfallMap/>
            </Grid> */}
          </Grid>


          <Grid container spacing={2}>

          </Grid>
        </Container>
      </div>
      </>
    )
  }
  
  export default BacktestingPage