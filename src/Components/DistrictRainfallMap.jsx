import React from 'react';
import mapboxgl from 'mapbox-gl';
import { useRef, useState, useEffect } from 'react';

function DistrictRainfallMap() {
  mapboxgl.accessToken = import.meta.env.VITE_TEST_MAPBOX_ACCESS_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(114.1020);
  const [lat, setLat] = useState(22.3350);
  const [zoom, setZoom] = useState(10.1);

  useEffect(() => {
    if (map.current) return; 
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/navigation-night-v1',
      center: [lng, lat],
      zoom: zoom,
      width: '100%',
      height: '100%'
    });

    map.current.on('load', () => {
      console.log("hello")
      fetch('/districtsBoundariesIndented.geojson')
        .then(response => response.json())
        .then(data => {
          map.current.addSource('districts', {
            type: 'geojson',
            data: data
          })
          console.log("load geojson success")
          
          map.current.addLayer({
            id: 'districts-fill',
            type: 'fill',
            source: 'districts',
            layout: {},
            paint: {
              'fill-color': '#0080ff', // Color of the fill
              'fill-opacity': 0.4 // Fill opacity
            }
          })
          
          map.current.addLayer({
            id: 'districts-outline',
            type: 'line',
            source: 'districts',
            layout: {},
            paint: {
              'line-color': '#000', // Color of the outline
              // 'fill-opacity': 0.5,
              'line-width': 1.5 // Width of the outline
            }
          });

          // Add a new layer for the text labels
          map.current.addLayer({
            id: 'districts-labels',
            type: 'symbol',
            source: 'districts',
            layout: {
              'text-field': ['get', 'PDD_Eng'], // Use the 'PDD_Eng' property of the geojson data
              'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
              'text-radial-offset': 0.5,
              'text-justify': 'auto',
              'text-size': 12
            },
            paint: {
              'text-color': '#ffffff',
              'text-halo-color': '#000000',
              'text-halo-width': 1
            }
          });
        })

        
    })
  })


  return (
    <>
      <div ref={mapContainer} style={{
        maxWidth: "800px",
        height: "800px",
        marginTop: '20px',
        position: "relative"
      }}/>  
    </>
  )
}
    
export default DistrictRainfallMap