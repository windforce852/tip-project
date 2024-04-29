import { TextField } from '@mui/material'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthCardTitle = () => {
  return(
    <>
      <div style={{
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <span style={{ fontSize: '20px', color: 'white', fontWeight: 'bold',}}>
          Welcome to
        </span>
        
        <span style={{ fontSize: '16px', color: '#2196f3', fontWeight: 'bold', }}>
          Flood Prediction System
        </span>

      </div>
    </>
  )
}



const AuthCardInput = ({ email, password, handleEmailChange, handlePasswordChange }) => {

  return(
    <>
    <div style={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center', alignItems: 'center', paddingBlockEnd: '8%'}}>
      <TextField 
        id="emailInput" 
        label="Email" 
        type='email'
        variant="outlined" 
        size='small' 
        sx={{ width: '100%', marginBlock: '2%'}} 
        value={email}
        onChange={handleEmailChange}
      />

      <TextField 
        id="passwordInput" 
        label="Password" 
        type='password'
        variant="outlined" 
        size='small' 
        sx={{ width: '100%', marginBlock: '2%'}} 
        value={password}
        onChange={handlePasswordChange}
      />
    </div>
    </>
  )
}

const AuthButton = ({ buttonTitle, onSubmit}) => {
  return(
    <>
      <button style={{
        width: 200,
        height: 40,
        backgroundColor: '#2196f3',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        fontWeight: 'bold',
        onSubmit: {onSubmit}
      }}>
        {buttonTitle}
      </button>
    </>
  )
}




const AuthCard = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const { pathname } = location;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAdminLoginSubmit = (event) => {
    event.preventDefault(); 

    //TODO
  };

  const handleCitizenLoginSubmit = (event) => {
    event.preventDefault(); 

    //TODO
  };

  const handleCitizenSignupSubmit = (event) => {
    event.preventDefault(); 

    //TODO
  };

  return(
    <>
    <div style={{
      border: '1px solid #2196f3',
      borderRadius: '8px',
      width: '100%',
      height: '100%',
      paddingBlockStart: '10%',
      paddingInline: '10%',
    }}>
      <AuthCardTitle/>

      <AuthCardInput
        email={email} 
        password={password} 
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
      />



      {(pathname === "/admin-login") && (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <AuthButton buttonTitle={`Login`} onSubmit={handleAdminLoginSubmit} />
        </div>
      )}



      {(pathname === "/citizen-login") && (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <AuthButton buttonTitle={`Login`} onSubmit={handleCitizenLoginSubmit} />

          <div style={{ fontSize: '0.8rem', paddingBlockStart: '10px'}}>
            <span>Do not have an account? </span>
            <Link to="/citizen-signup">Sign up</Link>
          </div>
        </div>
      )}

      {(pathname === "/citizen-signup") && (
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <AuthButton buttonTitle={`Sign up`} onSubmit={handleCitizenSignupSubmit} />

          <div style={{ fontSize: '0.8rem', paddingBlockStart: '10px'}}>
            <span>Already have an account? </span>
            <Link to="/citizen-login">Login</Link>
          </div>
        </div>
      )}

    </div>
    </>
  )
}

export default AuthCard;