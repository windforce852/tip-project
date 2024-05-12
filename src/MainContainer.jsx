import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { useAuth } from './Components/AuthContext';
import { Link } from 'react-router-dom';

function MainContainer({ children }) {

  const [loginStatus, setLoginStatus] = useState("notLoggedIn");
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  const jumpToAdminLogin = () => {
    navigate('/admin-login');  // Navigate to the Admin Login page
  };
  const jumpToCitizenLogin = () => {
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
            {(auth.role === 'Admin') ? (
              <>
              <Link to="/monitor" style={{ textDecoration: 'none' }}>
                <Button color="inherit" style={{ color: 'white' }}>Monitor</Button>
              </Link>
              <Button color="inherit" onClick={() => setAuth("", "")}>Logout</Button>
              </>
            ) : auth.role === 'Citizen' ? (
              <>
              <Link to="/citizen" style={{ textDecoration: 'none' }}>
                <Button color="inherit" style={{ color: 'white' }}>Home</Button>
              </Link>
              <Button color="inherit" onClick={() => setAuth("", "")}>Logout</Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={jumpToAdminLogin}>Admin Login</Button>
                <Button color="inherit" onClick={jumpToCitizenLogin}>Citizen Login</Button>
              </>
            )}
            {/* {loginStatus === "notLoggedIn" && (
              <>
                <Button color="inherit" onClick={handleAdminLogin}>Admin Login</Button>
                <Button color="inherit" onClick={handleCitizenLogin}>Citizen Login</Button>
              </>
            )} */}
            {/* {(loginStatus === "admin" || loginStatus === "citizen") && (
              <Button color="inherit">Logout</Button>
            )} */}
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