
# README

## To run the project, refer to:
https://swin-grp-project-2024.atlassian.net/wiki/pages/resumedraft.action?draftId=2523185&draftShareId=6d255003-970b-48a0-a1f4-fd1d80cda581

- "npm run dev" to start running the project and visit it on browser
- "ctrl c" in terminal to stop running


## Structure roughly brief:
1. Entry point at App.jsx  

2. Structure:
- All "page" should be under src/Page
- All "Component" should be under src/Components
- ALl "Hook" (that manage data) should be under src/Hooks
  
3. All pages are wrapped in MainContainer which is nested in App.jsx. MainContainer included the top nav bar, the background container, and the Routes that can route the web to different pages based on the URL. In App.jsx, you can see the below code, 
```
<Routes>
  <Route exact path="/" element={<LandingPage/>} />
  <Route path="/monitor" element={<MonitorPage/>} />
  <Route path="/backtesting" element={<BacktestingPage/>} />
  <Route path="/citizen" element={<CitizenHomePage/>} />
  <Route path="/citizen-login" element={<CitizenLoginPage/>} />
  <Route path="/citizen-signup" element={<CitizenSignupPage/>} />
  <Route path="/admin-login" element={<AdminLoginPage/>} />
</Routes>
```
It means that when you are running the website on let say http://localhost:5173/  
The MainContainer will render LandingPage because the route after localhost:5173 is "/", and render MonitorPage when the route is "http://localhost:5173/monitor", MonitorPage will be rendered.
**WE ARE USING REACT ROUTER V6, remember to contain the version when asking GPT**  

4. For how to jump between page
- Refer to MainContainer.jsx (commit at 2024-04-21, "Foundation setup")

5. For how to show different Component based on state, refer to the buttons in App Bar in MainContainer.jsx (commit at 2024-04-21, "Foundation setup")

6. For styling:
- global config should be added in index.css (discuss with teams before editing global config)
- we are using Material UI (MUI), It contains good looking pre-made component that we can adjust para and use.
  - See how to create a button using MUI: https://mui.com/material-ui/react-button/#text-buttons
  - For Layout, see how to make layout lke Flexbox and Grid using MUI: https://mui.com/material-ui/react-grid/
  - MUI library has been installed
  - **WE ARE USING MUI V5**
  - For styling of the page and component you are working at, consider use MUI first and then with in-line css to adjust inside your script.
  - Refer to LandingPage.jsx for some basic usage of MUI component and layout (commit at 2024-04-21, "Foundation setup")

7. For calling API and show the data in React:
- Refer to WeatherApp.jsx, it mounted the custom hook useOpenWeather that fetch data from OpenWeather, and render the data to WeatherApp. (commit at 2024-04-21, "Foundation setup")

8. For storing API KEY and secret:
- It should be stored in .env
  - .env is a file that only existed in your local project and will not be upload to GIT
  - Tell the team when you edited the .env
  - Refer to .env and useOpenWeather.js for how to use the keys in .env
  - Search "dotenv"