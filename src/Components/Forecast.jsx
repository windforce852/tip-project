import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useWeather from "../Hooks/useOpenWeather";
import WeatherIcon from "./WeatherIcon";

const Forecast = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        sx={{ padding: 2, width: "100%" }}
      >
        <Typography>Loading...</Typography>
      </Box>
    );
  if (error)
    return (
      <Box
        display="flex"
        justifyContent="center"
        sx={{ padding: 2, width: "100%" }}
      >
        <Typography>{error}</Typography>
      </Box>
    );
  if (!weatherData)
    return (
      <Box
        display="flex"
        justifyContent="center"
        sx={{ padding: 2, width: "100%" }}
      >
        <Typography>No Data available</Typography>
      </Box>
    );

  const dailyData = weatherData.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString("en-US");
    if (!acc[date]) {
      acc[date] = {
        temp: [],
        weather: item.weather[0].main,
      };
    }
    acc[date].temp.push(item.main.temp);
    return acc;
  }, {});

  const forecastData = Object.keys(dailyData)
    .slice(0, 5)
    .map((date) => ({
      day: new Date(date).toLocaleDateString("en-US", { weekday: "short" }),
      temp: Math.round(
        dailyData[date].temp.reduce((a, b) => a + b, 0) /
          dailyData[date].temp.length -
          273.15
      ), // Average temperature in Celsius
      iconType: dailyData[date].weather,
    }));

  return (
    <Box display="flex" justifyContent="space-between" sx={{ padding: 2 }}>
      {forecastData.map((weather, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ minWidth: 100, padding: 2 }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "1rem", marginBottom: "8px" }}
          >
            {weather.day}
          </Typography>
          <Box sx={{ fontSize: "3rem" }}>
            <WeatherIcon type={weather.iconType} />
          </Box>
          <Typography variant="body2">{weather.temp}°C</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Forecast;
