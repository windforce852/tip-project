import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {

  return (
    <>
    <Router>
      <MainContainer>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/monitor" element={<MonitorPage/>} />
          <Route path="/backtesting" element={<BacktestingPage/>} />
          <Route path="/citizen" element={<CitizenHomePage/>} />
          <Route path="/citizen-login" element={<CitizenLoginPage/>} />
          <Route path="/citizen-signup" element={<CitizenSignupPage/>} />
          <Route path="/admin-login" element={<AdminLoginPage/>} />
        </Routes>
      </MainContainer>
    </Router>
    </>
  )
}

export default App
