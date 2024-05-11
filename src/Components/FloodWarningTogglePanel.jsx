import { Switch } from '@mui/material';
import { useState } from 'react';
import { TextField } from '@mui/material'

function FloodWarningTogglePanel() {

  const [isToggleTrigger, setIsToggleTrigger] = useState(false)
  const [isWarningRelease, setIsWarningRelease] = useState(false)

  const handleToggle = () => {
    setIsToggleTrigger(prev => !prev)
  };

  const handleRelease = () => {

  }

  const handleStopRelease = () => {

  }

  const TogglePanel = () => {
    return (
      <>
      <p style={{marginBlockEnd: '0.4em', background: 'red', padding: '4px', borderRadius: '8px'}}>
        Release Flood Warning to Public
      </p>
      <Switch onChange={handleToggle}/>
      </>
    )
  }
  const ConfirmPanel = () => {

    const ConfirmReleaseBox = () => {
      return (
        <>
        <div style={{
          width: '100%', height: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <p style={{marginBlockEnd: '0.2em'}}>Type 'Release' to confirm releasing flood warning to public</p>
          <TextField 
            id="emailInput" 
            type='text'
            variant="outlined" 
            size='small' 
            sx={{ width: '50%', marginBlock: '2%'}} 
            value={`release`}
          />
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button buttonTitle={'Release'} color={'red'} onClick={handleRelease}/>
            <Button buttonTitle={'Cancel'} color={'#949494'} onClick={handleToggle}/>
          </div>
        </div>
        </>
      )
    }

    const ConfirmStopReleaseBox = () => {
      return (
        <>
        <div style={{
          width: '100%', height: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          
        }}>
          <p>ConfirmStopReleaseBox</p>
          <TextField 
            id="emailInput" 
            type='text'
            variant="outlined" 
            size='small' 
            sx={{ width: '50%', marginBlock: '2%'}} 
            value={`stopRelease`}
          />
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button buttonTitle={'Stop'} color={'red'} onClick={handleStopRelease}/>
            <Button buttonTitle={'Cancel'} color={'#949494'} onClick={handleToggle}/>
          </div>
        </div>
        </>
      )
    }

    const Button = ({ buttonTitle, color, onSubmit}) => {
      return(
        <>
          <button style={{
            width: 80,
            height: 30,
            backgroundColor: color,
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            fontWeight: 'bold',
            onSubmit: onSubmit,
            marginLeft: '5px',
            marginRight: '5px',
          }}>
            {buttonTitle}
          </button>
        </>
      )
    }

    return (
      <>
      <div style={{width: '100%', height: '100%'}}>
        {isWarningRelease ? <ConfirmStopReleaseBox/> : <ConfirmReleaseBox/>}
      </div>
      </>
    )
  }


  return (
    <>
    <div style={{ background: '#212121', width: '100%', height: '240px',borderRadius: '8px' , marginTop: '20px' }}>

      <h2 style={{paddingTop: '8px', paddingLeft: '8px',fontSize:'28px', marginBlockEnd: '10px'}}>
        Flood Warning Publish Panel
      </h2>


      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '70%', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px'}}>

        {!isToggleTrigger ? <TogglePanel/> : <ConfirmPanel/>}
        
      </div>
      
    </div>
    </>
  )
}
    
export default FloodWarningTogglePanel