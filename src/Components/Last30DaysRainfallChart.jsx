import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTheme } from '@mui/material/styles';
import useHistLast30DaysRainfall from '../Hooks/useHistLast30DaysRainfall';

function Last30DaysRainfallChart() {
  const theme = useTheme();
  const { rainfallMM, dates, loading, error } = useHistLast30DaysRainfall();

  return(
    <>
    <div style={{ background: '#212121', width: '100%', height: '300px', borderRadius: '8px' , marginTop: '20px'}}>

      <h2 style={{paddingTop: '8px', paddingLeft: '8px'}}>Last 30 Days Rainfall</h2>

      <LineChart
        xAxis={[
          {
            id: 'barCategories',
            // data: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10', 'day11', 'day12', 'day13', 'day14', 'day15', 'day16', 'day17', 'day18', 'day19', 'day20', 'day21', 'day22', 'day23', 'day24', 'day25', 'day26', 'day27', 'day28', 'day29', 'day30'],
            scaleType: 'band', 
            data: dates
          },
        ]}
        series={[
          {
            // data: [10, 50, 30, 120, 60, 30, 15, 10, 0, 20, 10, 50, 30, 120, 60, 30, 15, 10, 0, 20, 10, 0, 0, 20, 20, 3, 15, 10, 0, 0],
            data: rainfallMM
          },
        ]}

        sx={{
            width: 600,
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

export default Last30DaysRainfallChart