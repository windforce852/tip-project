import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";

const Forecast = () => {
  const forecastData = [
    { day: "Fri", icon: <WbSunnyIcon /> },
    { day: "Sat", icon: <CloudIcon /> },
    { day: "Sun", icon: <CloudIcon /> },
    { day: "Mon", icon: <CloudIcon /> },
    { day: "Tue", icon: <GrainIcon /> },
    { day: "Wed", icon: <WbSunnyIcon /> },
  ];

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
            {" "}
            {React.cloneElement(weather.icon, {
              style: { fontSize: "inherit" },
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Forecast;
