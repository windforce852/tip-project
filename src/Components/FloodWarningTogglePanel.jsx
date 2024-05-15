import { Switch } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { TextField } from '@mui/material'
import { useDebounce } from 'use-debounce';

function FloodWarningTogglePanel() {

  const [isToggleTrigger, setIsToggleTrigger] = useState(false)
  const [isWarningRelease, setIsWarningRelease] = useState(false)

  // const [inputValueInReleaseBox, setInputInValueReleaseBox] = useState('')
  // const [debouncedValueInReleaseBox] = useDebounce(inputValueInReleaseBox, 500);

  // const [inputValueInStopReleaseBox, setInputValueInStopReleaseBox] = useState('')
  // const [debouncedValueInStopReleaseBox] = useDebounce(inputValueInStopReleaseBox, 500);

  const [warningMsgInReleaseBox, setWarningMsgInReleaseBox] = useState('')
  const [warningMsgInStopReleaseBox, setWarningMsgInStopReleaseBox] = useState('')
  
  const inputReleaseRef = useRef(null);
  const inputStopReleaseRef = useRef(null);

  useEffect(() => {
    const storedIsReleased = localStorage.getItem('isReleased');
    // setIsWarningRelease(storedIsReleased);
    setIsWarningRelease(storedIsReleased === 'true');
  }, []);


  const sendEmail = async () => {
    try {
      const response = await fetch (import.meta.env.VITE_TEST_EMAIL_ENDPOINT);
      const data = await response.json();
      console.log('send email response');
      console.log(data)
    } catch (error) {
      console.log(`send email error: ${error}`)
    }
  }

  const sendEmail2 = async () => {
    const timeout = (ms) => new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout after ' + ms + ' ms')), ms)
    );
    try {
      const response = await Promise.race([
          fetch(import.meta.env.VITE_TEST_EMAIL_ENDPOINT),
          timeout(30000)
      ]);
      if (!response.ok) {
          console.log(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Send email response:');
      console.log(data);
    } catch (error) {
        console.log(`Send email error: ${error}`);
    }
  }

  const handleToggle = () => {
    setIsToggleTrigger(prev => !prev)
  };

  const handleRelease = () => {
    // console.log('handleRelease fire')
    const value = inputReleaseRef.current.value;
    // console.log(`inputReleaseRef: ${value}`)
    if(value === 'release') {
      localStorage.setItem('isReleased', 'true');
      setIsWarningRelease(true);
      setWarningMsgInReleaseBox('')

      // sendEmail2()

      const storedIsReleased = localStorage.getItem('isReleased');
      // console.log(`localStorage.isReleased is now: ${storedIsReleased}`)
      handleToggle()
    } else {
      setWarningMsgInReleaseBox('**Invalid Input**')
    }
  }

  const handleStopRelease = () => {
    // console.log('handleStopRelease fire')
    const value = inputStopReleaseRef.current.value;
    // console.log(`inputStopReleaseRef: ${value}`)
    if(value === 'stop') {
      localStorage.setItem('isReleased', 'false');
      setIsWarningRelease(false);
      setWarningMsgInStopReleaseBox('')
      const storedIsReleased = localStorage.getItem('isReleased');
      // console.log(`localStorage.isReleased is now: ${storedIsReleased}`)
      handleToggle()
    } else {
      setWarningMsgInStopReleaseBox('**Invalid Input**')
    }
  }

  // Update the state based on input
  // const handleChangeReleaseBox = (event) => { 
  //   setInputInValueReleaseBox(event.target.value);
  // };

  const TogglePanel = () => {
    return (
      <>
      <p style={{marginBlockEnd: '0.4em', background: (isWarningRelease ? '#cf6a06' : '#05a15d'), color: 'white', padding: '6px', borderRadius: '8px', fontWeight: 'bold'}}>
        Flood Warning to Public is now: {
          (isWarningRelease == true ) ? "On" : "Off"
        }
      </p>
      <Switch onChange={handleToggle}
        checked={
          (isWarningRelease == true ) ? true : false
        }
      />
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
          <p style={{marginBlockEnd: '0.2em'}}>Type 'release' to confirm releasing flood warning to public</p>

          <TextField 
            id="releaseInput" 
            type='text'
            variant="outlined" 
            size='small' 
            sx={{ width: '50%', marginBlock: '2%'}} 
            // value={inputValueInReleaseBox}
            // onChange={(e) => setInputInValueReleaseBox(e.target.value)}
            inputRef={inputReleaseRef}
          />

          <p style={{marginBlock: '0.2em'}}>{warningMsgInReleaseBox}</p>

          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button buttonTitle={'Release'} color={'red'} onSubmit={handleRelease}/>
            <Button buttonTitle={'Cancel'} color={'#949494'} onSubmit={handleToggle}/>
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
          <p>Type 'stop' to confirm releasing flood warning to public</p>

          <TextField 
            id="stopInput" 
            type='text'
            variant="outlined" 
            size='small' 
            sx={{ width: '50%', marginBlock: '2%'}} 
            // value={inputValueInStopReleaseBox}
            // onChange={(e) => setInputValueInStopReleaseBox(e.target.value)}
            inputRef={inputStopReleaseRef}
          />

          <p style={{marginBlock: '0.2em'}}>{warningMsgInStopReleaseBox}</p>

          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Button buttonTitle={'Stop'} color={'red'} onSubmit={handleStopRelease}/>
            <Button buttonTitle={'Cancel'} color={'#949494'} onSubmit={handleToggle}/>
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
            marginLeft: '5px',
            marginRight: '5px',
          }} onClick={onSubmit}>
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