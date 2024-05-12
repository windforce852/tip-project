import useEvacuationPoints from "../Hooks/useEvacuationPoints"

function EvacuationPoints() {
  const { points, loading, error } = useEvacuationPoints();

  return (
  <>
  <div style={{ background: '#212121', width: '100%', height: 'auto', borderRadius: '8px', paddingBottom: '40px' }}>
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
      <h1>Evacuation Points</h1>
    </div>
      
    <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '40px', paddingInline: '8em'}}>The district community centre will be opened as evacuation point and temporary shelter when flood happen. However, follow the lead of emergency services and keep yourself informed for the latest information and advisories.</p>

    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', paddingLeft: '40px',}}>
          
      {loading ? (<p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {points.map((centre, index) => {
            return (
              <li key={index}>
                <h3>{Object.keys(centre)[0]}</h3>
                <p>Centre: {centre[Object.keys(centre)[0]].name}</p>
                <p>Address: {centre[Object.keys(centre)[0]].address}</p>
                <p>Contact: {centre[Object.keys(centre)[0]].phone}</p>
              </li>
            )
          })}
        </ul>
      )}
          
    </div>
  </div>
  </>
  )
}

export default EvacuationPoints