import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



function RegisterEmailDropdown({ onDistrictChange }) {
  const [inputs, setInputs] = useState({
    status: 'On',
    district: 'Islands District'
  });
  const [subscription, setSubscription] = React.useState('On');
  const [districtSelected, setDistrictSelected] = useState('All');

  const handleDistrictChange = (event) => {
    const value = event.target.value;
    setDistrictSelected(value);
    setInputs(prevState => ({ ...prevState, district: value }))
    onDistrictChange(value);
  }

  return (
    <>
      <Box sx={{ minWidth: 150, marginBlockEnd: '20px' }}>
        <FormControl fullWidth>
          <InputLabel id="District-select-label">Your District</InputLabel>
          <Select
            labelId="District-select-label"
            id="District-select"
            value={districtSelected}
            label="District"
            onChange={handleDistrictChange}
            disabled={subscription === "Off"}
          >
            <MenuItem value={"All"}>All District</MenuItem>
            <MenuItem value={"Islands"}>Islands District</MenuItem>
            <MenuItem value={"Kwai Tsing"}>Kwai Tsing</MenuItem>
            <MenuItem value={"North"}>North District</MenuItem>
            <MenuItem value={"Sai Kung"}>Sai Kung</MenuItem>
            <MenuItem value={"Sha Tin"}>Sha Tin</MenuItem>
            <MenuItem value={"Tai Po"}>Tai Po</MenuItem>
            <MenuItem value={"Tsuen Wan"}>Tsuen Wan</MenuItem>
            <MenuItem value={"Tuen Mun"}>Tuen Mun</MenuItem>
            <MenuItem value={"Yuen Long"}>Yuen Long</MenuItem>
            <MenuItem value={"Kowloon City"}>Kowloon City</MenuItem>
            <MenuItem value={"Kwun Tong"}>Kwun Tong</MenuItem>
            <MenuItem value={"Sham Shui Po"}>Sham Shui Po</MenuItem>
            <MenuItem value={"Wong Tai Sin"}>Wong Tai Sin</MenuItem>
            <MenuItem value={"Yau Tsim Mong"}>Yau Tsim Mong</MenuItem>
            <MenuItem value={"Central and Western"}>Central and Western District</MenuItem>
            <MenuItem value={"Eastern"}>Eastern District</MenuItem>
            <MenuItem value={"Southern"}>Southern District</MenuItem>
            <MenuItem value={"Wan Chai"}>Wan Chai</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default RegisterEmailDropdown;
