import { Card, CardContent, Box, Typography } from "@mui/material";
function TideLevel() {
  return (
    <>
    {/* <Card style={{ background: '#2b838f', width: '100%', height: '220px', paddingBlockStart: '5px'}}>
        <div style={{marginLeft: '15px', marginTop: '10px'}}>
          <h2 style={{marginBlockStart: '0px'}}>Tide Level</h2>
          <p>This is the TideLevel component.</p>
        </div>
    </Card> */}

    <Card sx={{ background: "#2b838f", width: "100%", height: "220px"}}>
      <CardContent>
        <Typography variant="h4">Tide </Typography>
        <Box sx={{ display: "flex" }}>
          <p>This is the TideLevel component.</p>
        </Box>
      </CardContent>
    </Card>
    </>
  )
}
      
export default TideLevel