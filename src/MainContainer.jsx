import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, AppBar, Toolbar, Typography, Container } from '@mui/material';

function MainContainer({ children }) {

  const [loginStatus, setLoginStatus] = useState("notLoggedIn");

  const navigate = useNavigate();
  const handleAdminLogin = () => {
    navigate('/admin-login');  // Navigate to the Admin Login page
  };
  const handleCitizenLogin = () => {
    navigate('/citizen-login');
  };
  const handleBackToLanding = () => {
    navigate('/');
  };

  return(
    <div style={{ background: '#121212', minHeight: '100vh', color: 'white' }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" size="large" onClick={handleBackToLanding}>Flood Prediction System</Button>

          <div style={{ marginLeft: 'auto' }}>
            {loginStatus === "notLoggedIn" && (
              <>
                <Button color="inherit" onClick={handleAdminLogin}>Admin Login</Button>
                <Button color="inherit" onClick={handleCitizenLogin}>Citizen Login</Button>
              </>
            )}
            {(loginStatus === "admin" || loginStatus === "citizen") && (
              <Button color="inherit">Logout</Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
    </div>
    
  )
}  

export default MainContainer