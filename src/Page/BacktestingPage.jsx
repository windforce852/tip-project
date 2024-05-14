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
import DistrictRainfallNumHor3 from '../Components/DistrictRainfallNumHor3';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useHistDistrictRainfall4 from '../Hooks/useHistDistrictRainfall4';
import FloodProbability24hr3 from '../Components/FloodProbability24hr3';

function BacktestingPage() {

  const { rainfall, loading, error } = useHistDistrictRainfall();
  
  const [ selectedDate, setSelectedDate ] = useState();

  const { rainfallData, loading4, error4 } = useHistDistrictRainfall4(selectedDate);

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
                <DateSelector setDate={setSelectedDate}/>
              </LocalizationProvider>
            </Grid>
          </Grid>


          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FloodProbability24hr3 currentWeather={rainfallData} loading={loading4} error={error4}/>
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
              <DistrictRainfallNumHor3 currentWeather={rainfallData} loading={loading4} error={error4}/>
            </Grid>

          </Grid>


          <Grid container spacing={2}>

          </Grid>
        </Container>
      </div>
      </>
    )
  }
  
  export default BacktestingPage