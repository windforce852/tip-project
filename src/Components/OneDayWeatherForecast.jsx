import React from "react";
import { Card, CardContent, Typography, Box, Tooltip, styled } from "@mui/material";
import use1DayWeather from "../Hooks/use1DayWeather";

function OneDayWeatherForecast() {
  const { OneDayweather, loading, error } = use1DayWeather();

  const getWeatherRating = (weatherData) => {
    const maxTemp = parseInt(weatherData.maxTemp, 10);
    const minTemp = parseInt(weatherData.minTemp, 10);
    const conditions = weatherData.forecastDesc.includes("sunny")
      ? "Good"
      : "Poor";

    if (maxTemp > 30) {
      return "Too Hot";
    } else if (minTemp < 10) {
      return "Too Cold";
    } else {
      return conditions;
    }
  };

  if (loading) {
    return (
      <Card sx={{ background: "#212121", width: "100%", height: "250px" }}>
        <CardContent>
          <Typography variant="h5">Loading...</Typography>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card
        fa-stack-2x={{ background: "#212121", width: "100%", height: "250px" }}
      >
        <CardContent>
          <Typography variant="h5">Error:</Typography>
          <Typography variant="body2">{error}</Typography>
        </CardContent>
      </Card>
    );
  }

  const weatherRating = getWeatherRating(OneDayweather);

  const renderWithTooltip = (text) => {
    const MAX_LENGTH = 55; // Max characters before showing tooltip
    if (text.length > MAX_LENGTH) {
      return (
        <Tooltip title={text} placement="top">
          <Typography variant="body2" color="text.secondary">
            {text.substring(0, MAX_LENGTH) + "..."}
          </Typography>
        </Tooltip>
      );
    }
    return (
      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    );
  };


  return (
    <Card sx={{ background: "#212121", width: "100%", height: "250px"}}>
      <CardContent>
        <Typography variant="h4" style={{fontWeight: 'bold', fontSize:'28px'}}>1 Day Weather Forecast</Typography>
        {/* <h2>One Day Weather </h2> */}
        <Box sx={{ display: "flex" }}>
          <strong>Weather Rating: </strong>

          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {weatherRating}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <strong>Forecast Period: </strong>

          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {OneDayweather.forecastPeriod}
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <strong>Description: </strong>

          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {renderWithTooltip(OneDayweather.forecastDesc)}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <strong>General Situation: </strong>

          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {renderWithTooltip(OneDayweather.generalSituation)}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <strong>Outlook: </strong>

          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {renderWithTooltip(OneDayweather.outlook)}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <strong>Updated: </strong>

          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {new Date(OneDayweather.updateTime).toLocaleString()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default OneDayWeatherForecast;
