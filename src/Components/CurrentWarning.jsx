import React from "react";
import {
  Box,
  Typography,
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
} from "@mui/material";
import useGovCurrentWeather from "../Hooks/useGovCurrentWeather";

function CurrentWarning() {
  const { currentWeather, loading, error } = useGovCurrentWeather();

  const defaultWarningImage = "/path/to/uploaded/default/image.png"; // Replace with the path to the uploaded image

  return (
    <Box sx={{ maxWidth: 345 }}>
      <Card
        sx={{
          background: currentWeather?.warningMessage ? "red" : "green",
          width: "100%",
          height: "220px",
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {currentWeather?.warningMessage || "No current warnings"}
            </Typography>
            {currentWeather?.warningMessage && (
              <CardMedia
                component="img"
                height="140"
                image={currentWeather?.imageUrl || defaultWarningImage}
                alt="Weather Warning"
              />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CurrentWarning;
