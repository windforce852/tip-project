import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material/styles';
import useHistLast7DaysRainfall from '../Hooks/useHistLast7DaysRainfall';

function Last7DaysRainfallChart() {
  const theme = useTheme();
  const { rainfallMM, dates, loading, error } = useHistLast7DaysRainfall();


  if (loading) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '300px', borderRadius: '8px' , marginTop: '20px'}}>
        <h2>Loading...</h2>;
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '300px', borderRadius: '8px' , marginTop: '20px'}}>
        <h2>Error: </h2>;
        <p>{error}</p>
      </div>
    )
  }

  if (!rainfallMM || !dates ) {
    return (
      <div style={{ background: '#212121', width: '100%', height: '300px', borderRadius: '8px' , marginTop: '20px'}}>
        <h2>No data available.</h2>;
      </div>
    )
  }

  return(
    <>
    <div style={{ background: '#212121', width: '100%', height: '300px', borderRadius: '8px' , marginTop: '20px'}}>

      <h2 style={{paddingTop: '8px', paddingLeft: '8px'}}>Last 7 Days Rainfall</h2>

      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            // data: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'],
            data: dates,
            scaleType: 'band',
          },
        ]}
        series={[
          {
            // data: [10, 50, 30, 120, 60, 30, 15],
            data: rainfallMM
          },
        ]}

        sx={{
            width: 200,
            [theme.breakpoints.down('md')]: {
              width: '100%',
            },
          }}
        height={250}
      />

    </div>
    </>
  )
}

export default Last7DaysRainfallChart