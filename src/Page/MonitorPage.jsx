import { Container, Box, Grid } from '@mui/material';
import CurrentWarning from '../Components/CurrentWarning'
import TideLevel from '../Components/TideLevel'
import OneDayWeatherForecast from '../Components/OneDayWeatherForecast'
import FloodProbability1hr from'../Components/FloodProbability1hr'
import FloodWarningTogglePanel from '../Components/FloodWarningTogglePanel'
import DistrictRainfallNum from '../Components/DistrictRainfallNum'
import DistrictRainfallMap from '../Components/DistrictRainfallMap'
import DistrictRainfallMap2 from '../Components/DistrictRainfallMap2';
import DistrictRainfallMap3 from '../Components/DistrictRainfallMap3';

import useGovCurrentWeather from "../Hooks/useGovCurrentWeather"

function MonitorPage() {
  
  const { currentWeather, loading, error } = useGovCurrentWeather();

    return (
      <>
      <div>
        <h1>MonitorPage</h1>
        <Container>
          {/* First Row */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <CurrentWarning/>
            </Grid>

            <Grid item xs={12} md={3}>
              <TideLevel />
            </Grid>

            <Grid item xs={12} md={6}>
              <OneDayWeatherForecast />
            </Grid>
          </Grid>

          {/* Second Row */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FloodProbability1hr/>
            </Grid>

            <Grid item xs={12} md={6}>
              <FloodWarningTogglePanel/>
            </Grid>
          </Grid>

          {/* Third Row */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <DistrictRainfallNum currentWeather={currentWeather} loading={loading} error={error}/>
            </Grid>
          {/* </Grid>


          <Grid container spacing={2}> */}
            <Grid item xs={12} md={8} style={{ width: "100%", height: "100%" }}>
              <DistrictRainfallMap3/>
            </Grid>
          </Grid>

        </Container>
      </div>
      </>
    )
  }
  
  export default MonitorPage