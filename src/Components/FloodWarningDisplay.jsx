import { Grid } from "@mui/material";

function FloodWarningDisplay() {
  return (
    <>
      <Grid container sx={{background: '#2b838f', width: '100%', height: '500px', borderRadius: '8px'}}>
      {/* <div style={{ background: '#2b838f', width: '100%', height: '500px' }}> */}
      <div style={{width: '100%', height: '100%', paddingLeft: '20px'}}>
        <h2>Flood Warning Display Component</h2>
        <p>This is the Flood Warning Display component.</p>
      </div>
      {/* </div> */}
      </Grid>
    </>
  )
}
  
export default FloodWarningDisplay