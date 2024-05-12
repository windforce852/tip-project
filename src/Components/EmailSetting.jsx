import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



function EmailSetting() {
  const [inputs, setInputs] = useState({
    status: 'On',
    district: 'Islands' // Default district, can adjust to users previous preference if available
  });
  const [subscription, setSubscription] = React.useState('On');
  const [districtSelected, setDistrictSelected] = React.useState('Islands');

  const handleDistrictChange = (event) => {
    //const name = event.target.name;
    const value = event.target.value;
    setDistrictSelected(value);
    setInputs(prevState => ({...prevState, district: value}))
    
  }
  const handleStatusChange = (event) => {
    //const name = event.target.name;
    const value = event.target.value;
    setSubscription(value);
    setInputs(prevState => ({...prevState, status: value}))

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // If status is "Off", set district to na
    const districtValue = inputs.status === 'Off' ? 'na' : inputs.district;
    const updatedInputs = {...inputs, district: districtValue};
    //Shows output which needs to be sent to backend
    //alert(JSON.stringify(updatedInputs));

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "API_URL", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange=function (){
      if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
    xhr.send(JSON.stringify(updatedInputs));

  }

  return (
    <>
      <div style={{ background: '#2b838f', width: '100%', height: 'auto', justifyContent: 'center' }}>

          <h2 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Email Notification Settings</h2>
          <p>Below is the setting to enable email notifications about warnings for a district of your choosing. You can also change your selected district at any time by submitting the following section again.</p>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '300px' }}>
              <Box sx={{ minWidth: 150}}>
                  <FormControl fullWidth>
                    <InputLabel id="Subscription-select-label">Subscription</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={subscription}
                      label="Subscription"
                      onChange={handleStatusChange}
                      >                    
                      <MenuItem value={"On"}>On</MenuItem>
                      <MenuItem value={"Off"}>Off</MenuItem>
                     
                    </Select>
                  </FormControl>
                </Box>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{ minWidth: 150}}>
                  <FormControl fullWidth>
                    <InputLabel id="District-select-label">District</InputLabel>
                    <Select
                      labelId="District-select-label"
                      id="District-select"
                      value={districtSelected}
                      label="District"
                      onChange={handleDistrictChange}
                      disabled={subscription === "Off"}
                    >
                      <MenuItem value={"Islands"}>Islands</MenuItem>
                      <MenuItem value={"Kwai Tsing"}>Kwai Tsing</MenuItem>
                      <MenuItem value={"North"}>North</MenuItem>
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
                      <MenuItem value={"Central and Western"}>Central and Western</MenuItem>
                      <MenuItem value={"Eastern"}>Eastern</MenuItem>
                      <MenuItem value={"Southern"}>Southern</MenuItem>
                      <MenuItem value={"Wan Chai"}>Wan Chai</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
               
              </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '300px' }}>
            <Button variant="contained" onClick={(handleSubmit)}>Submit</Button>
            </div>
            </div>
          </form>
          <p>Please note you should not just rely on our notifications. While we strive to provide up-to-date notifications, you should always listen to current information being provided by emergency services.</p>
      </div>
    </>
  );
}

export default EmailSetting;
