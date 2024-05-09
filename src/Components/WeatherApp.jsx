import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import useWeather from "../Hooks/useOpenWeather";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

function WeatherApp() {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return (
      <div style={{ background: "#2b838f", width: "100%", height: "300px" }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ background: "#2b838f", width: "100%", height: "300px" }}>
        <div>Error: {error}</div>;
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div style={{ background: "#2b838f", width: "100%", height: "300px" }}>
        <div>No weather data available.</div>
      </div>
    );
  }

  const { list } = weatherData;
  const firstDayWeather = list[0];
  const { dt, main, weather, wind } = firstDayWeather;
  const { temp, humidity } = main;
  const weatherMain = weather.length > 0 ? weather[0].main : "Not available";
  const description =
    weather.length > 0 ? weather[0].description : "Not available";

  const { speed } = wind;
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          borderRadius: "8px",
          background: "#2b838f",
          p: 2,
          // backgroundColor: "#e0e0e0",
          // boxShadow: "2px 2px 6px #bebebe, -2px -2px 6px #ffffff",
          // "&:hover": {
          //   transform: "translateY(-5px)",
          //   transition: "transform 0.3s ease",
          // },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Today Weather
        </Typography>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          px={4}
        >
          {" "}
          <Box>
            <WeatherIcon type={weatherMain} style={{ fontSize: "5rem" }} />
          </Box>
          <Box>
            <List>
              <ListItem>
                <ListItemText
                  primary={`Temperature: ${(temp - 273.15).toFixed(2)}°C`}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Humidity: ${humidity}%`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Weather: ${description}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Wind speed: ${speed} m/s`} />
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Forecast />
      </Grid>
    </>
  );
}

export default WeatherApp;
