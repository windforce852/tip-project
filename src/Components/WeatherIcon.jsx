import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay"; // For clear night
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // For snow
import FilterDramaIcon from "@mui/icons-material/FilterDrama"; // For mist or fog
import FlashOnIcon from "@mui/icons-material/FlashOn"; // For thunderstorms
import AirIcon from "@mui/icons-material/Air"; // For wind
import WavesIcon from "@mui/icons-material/Waves"; // For hurricane or tsunami

const WeatherIcon = ({ type, style = {} }) => {
  switch (type) {
    case "ClearDay":
      return <WbSunnyIcon style={{ fontSize: "inherit", ...style }} />;
    case "ClearNight":
      return <NightsStayIcon style={{ fontSize: "inherit", ...style }} />;
    case "Clouds":
      return <CloudIcon style={{ fontSize: "inherit", ...style }} />;
    case "Rain":
    case "Drizzle":
      return <GrainIcon style={{ fontSize: "inherit", ...style }} />;
    case "Snow":
      return <AcUnitIcon style={{ fontSize: "inherit", ...style }} />;
    case "Thunderstorm":
      return <FlashOnIcon style={{ fontSize: "inherit", ...style }} />;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
      return <FilterDramaIcon style={{ fontSize: "inherit", ...style }} />;
    case "Wind":
    case "Gale":
      return <AirIcon style={{ fontSize: "inherit", ...style }} />;
    case "Hurricane":
    case "Tsunami":
      return <WavesIcon style={{ fontSize: "inherit", ...style }} />;
    default:
      return <CloudIcon style={{ fontSize: "inherit", ...style }} />;
  }
};

export default WeatherIcon;
