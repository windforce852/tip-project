import useEvacuationPoints from "../Hooks/useEvacuationPoints"
import { useState, useEffect } from "react";
import RegisterEmailDropdown from "./RegisterEmailDropdown";

function EvacuationPointsChoose() {
  const { points, loading, error } = useEvacuationPoints();
  const [selectedDistrict, setSelectedDistrict] = useState('');

  useEffect(() => {
    if (points && points.length > 0) {
      setSelectedDistrict('All');
    }
  }, [points]);

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
  }

  return (
    <>
      <div style={{ background: '#212121', width: '100%', height: 'auto', borderRadius: '8px', paddingBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <h1>Evacuation Points</h1>
        </div>

        <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '40px', paddingInline: '8em' }}>The district community centre will be opened as evacuation point and temporary shelter when flood happen. However, follow the lead of emergency services and keep yourself informed for the latest information and advisories.</p>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <RegisterEmailDropdown onDistrictChange={handleDistrictChange} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', paddingLeft: '40px', }}>

        {loading ? (<p>Loading...</p>) : error ? (<p>Error: {error}</p>) : (
    selectedDistrict === "All" ? (
      points.map((centre, index) => {
        const districtKey = Object.keys(centre)[0];
        const details = centre[districtKey];
        return (
          <ul key={index}>
            <li>
              <h3>{districtKey}</h3>
              <p>Centre: {details.name}</p>
              <p>Address: {details.address}</p>
              <p>Contact: {details.phone}</p>
              <a href="#" onClick={() => window.open(details.map)} style={{color: 
              "white"}}>Open Map</a>
            </li>
          </ul>
        )
      })
    ) : (
      points.filter(point => Object.keys(point)[0] === selectedDistrict).map((centre, index) => {
        const districtKey = Object.keys(centre)[0];
        const details = centre[districtKey];
        return (
          <ul key={index}>
            <li>
              <h3>{districtKey}</h3>
              <p>Centre: {details.name}</p>
              <p>Address: {details.address}</p>
              <p>Contact: {details.phone}</p>
              <a href="#" onClick={() => window.open(details.map)} style={{color: 
              "white"}}>Open Map</a>
            </li>
          </ul>
        )
      })
    )
  )}

        </div>
      </div>
    </>
  )
}

export default EvacuationPointsChoose