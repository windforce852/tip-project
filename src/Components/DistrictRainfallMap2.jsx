import React from 'react';
import mapboxgl from 'mapbox-gl';
import { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function DistrictRainfallMap2() {
  mapboxgl.accessToken = import.meta.env.VITE_TEST_MAPBOX_ACCESS_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(114.1020);
  const [lat, setLat] = useState(22.3350);
  const [zoom, setZoom] = useState(10.1);

  // Mapping table for district names
  const districtMapping = {
    "Central & Western District": "Central & Western",
    "Eastern District": "Eastern",
    "North District": "Fanling/ Sheung Shui",
    "Kowloon City": "Kowloon City",
    "Kwai Tsing": "Kwai Chung",
    "Kwun Tong": "Kwun Tong",
    "Sai Kung": "Ma On Shan",
    "Yau Tsim Mong": "Mong Kok",
    "Islands District": "North Lantau",
    "Tai Po": "NENT (Other Area)",
    "Yuen Long": "NWNT (Other Area)",
    "Sha Tin": "SENT (Other Area)",
    "Sham Shui Po": "SWNT (Other Area)",
    "Southern District": "Southern",
    "Tsuen Wan": "Tsuen Wan",
    "Tuen Mun": "Tuen Mun",
    "Wan Chai": "Wan Chai",
    "Wong Tai Sin": "Wong Tai Sin",
    "Yau Ma Tei": "Yau Ma Tei"
  };

  function getColor(maxRainfall) {
    if (maxRainfall >= 100) return '#ff0000';
    else if (maxRainfall > 49) return '#ffff00';
    else return '#00ff00';
  }

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

    map.current.on('load', async() => {

      //fetch current weather
      const weatherResponse = await fetch('/mockCurrentWeather.json');
      const weatherData = await weatherResponse.json();

      //fetch geoJson
      const geoResponse = await fetch('/districtsBoundariesIndented.geojson');
      const geoData = await geoResponse.json();

      map.current.addSource('districts', {
        type: 'geojson',
        data: geoData
      });

      // Use the mapping table to relate weather data to geojson features
      geoData.features.forEach(feature => {
        const districtName = feature.properties.PDD_Eng;
        console.log(`districtName: ${districtName}`)

        const weatherPlace = Object.keys(districtMapping).find(key => districtMapping[key] === districtName);
        console.log(`weatherPlace: ${weatherPlace}`)

        const weather = weatherData.rainfall.data.find(d => d.place === weatherPlace);
        console.log(`weather: ${weather}`)

        const maxRainfall = weather ? weather.max : 0;
        console.log(`maxRainfall: ${maxRainfall}`)

        const color = getColor(maxRainfall)

        console.log(`$color: ${color}`)

        map.current.addLayer({
          // id: `district-${districtName}-fill`,
          id: uuidv4(),
          type: 'fill',
          source: 'districts',
          paint: {
            'fill-color': color,
            'fill-opacity': 0.75
          }
        });


        // map.current.addLayer({
        //   id: uuidv4(),
        //   type: 'fill',
        //   source: 'districts',
        //   filter: ['==', 'PDD_Eng', districtName],  // Adjust the filter to match your GeoJSON property
        //   paint: {
        //     'fill-color': color, 
        //     'fill-opacity': 0.75
        //   }
        // });



      });

      map.current.addLayer({
        id: 'test-layer',
        type: 'fill',
        source: 'districts',
        filter: ['==', 'PDD_Eng', 'Central & Western'],  // Adjust the filter to match your GeoJSON property
        paint: {
          'fill-color': '#ff0000',  // Force a red color for testing
          'fill-opacity': 0.75
        }
      });
      

      map.current.addLayer({
        // id: 'districts-outline',
        id: uuidv4(),
        type: 'line',
        source: 'districts',
        paint: {
          'line-color': '#000',
          'line-width': 1.5
        }
      });

      
  
    });
        
  }, [])


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
    
export default DistrictRainfallMap2