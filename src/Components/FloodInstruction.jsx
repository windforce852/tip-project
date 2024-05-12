import useEvacuationPoints from "../Hooks/useEvacuationPoints"

function FloodInstruction() {

  const { points, loading, error } = useEvacuationPoints();
  console.log("points: ")
  console.log(points)

  return (
    <>
      <div style={{ background: '#212121', width: '100%', height: 'auto', borderRadius: '8px', paddingBottom: '40px' }}>
        <h2 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '38px', paddingTop: '20px'}}>What you can do during a flood</h2>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <iframe width="552" height="346" src="https://www.youtube.com/embed/eR55MT6r9xU" title="Flooding 101: A Complete Guide to Flood Planning and Preparedness" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', padding: '40px',}}>
          <h2>1. Stay Safe</h2>
          <p>Remain indoors unless it is unsafe to do so. Avoid low-lying areas and regions prone to flooding. If you are currently in a flood-prone area, consider relocating to higher ground.</p>

          <h2>2. Stay Informed</h2>
          <p>Continuously monitor local news updates and the <a href="https://www.hko.gov.hk/en/index.html">Hong Kong Observatory's official website</a> for the latest information and advisories.</p>

          <h2>3. Evacuation Readiness</h2>
          <p>Familiarize yourself with the nearest evacuation points. Be prepared to evacuate promptly if instructed by emergency services. Keep essential items such as medications, important documents, and necessary personal items ready for quick departure.</p>

          <h2>4. Additional Safety Tips</h2>
          <ul>
            <li>Avoid electrical equipment and outlets near water.</li>
            <li>Do not attempt to wade or drive through floodwaters.</li>
            <li>Secure any loose objects around your property to prevent them from becoming hazards.</li>
            <li>Ensure your mobile devices are fully charged.</li>
          </ul>

          <h2>5. Emergency Contacts</h2>
          <p>For emergencies, dial 999.</p>
        </div>


        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
          <h1>Evacuation Points</h1>
        </div>
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
              )
            }
          
        </div>

        <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px'}}>The above is to be used as a guide only. Not all suggestions will be relevant or applicable to you.</p>
        <strong style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> Always follow current advice given by emergency services.</strong>
        
      </div>
    </>
  )
}
  
export default FloodInstruction