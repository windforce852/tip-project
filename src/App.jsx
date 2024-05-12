import { BrowserRouter as Router, Route, Routes, Navigate, json } from 'react-router-dom';
import { AuthProvider, useAuth } from '../src/Components/AuthContext';

import MainContainer from './MainContainer';
import LandingPage from '../src/Page/LandingPage'
import MonitorPage from '../src/Page/MonitorPage';
import BacktestingPage from '../src/Page/BacktestingPage';
import CitizenHomePage from '../src/Page/CitizenHomePage';
import CitizenLoginPage from '../src/Page/CitizenLoginPage';
import CitizenSignupPage from '../src/Page/CitizenSignupPage';
import AdminLoginPage from '../src/Page/AdminLoginPage';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  // Protected Route for Admin
  const AdminRoute = ({ children }) => {
    const { auth } = useAuth();
    console.log(JSON.stringify(auth))
    return auth.token && auth.role === 'Admin' ? children : <Navigate to="/admin-login" />;
  };

  return (
    <>
    <AuthProvider>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Router>
      <MainContainer>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          {/* <Route path="/monitor" element={<MonitorPage/>} /> */}
          {/* <Route path="/backtesting" element={<BacktestingPage/>} /> */}
          <Route path="/monitor" element={<AdminRoute><MonitorPage /></AdminRoute>} />
          <Route path="/backtesting" element={<AdminRoute><BacktestingPage /></AdminRoute>} />
          <Route path="/citizen" element={<CitizenHomePage/>} />
          <Route path="/citizen-login" element={<CitizenLoginPage/>} />
          <Route path="/citizen-signup" element={<CitizenSignupPage/>} />
          <Route path="/admin-login" element={<AdminLoginPage/>} />
        </Routes>
      </MainContainer>
    </Router>
    </ThemeProvider>
    </AuthProvider>
    </>
  )
}

export default App
