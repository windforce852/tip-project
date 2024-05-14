import React from 'react';
import mapboxgl from 'mapbox-gl';
import { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function DistrictRainfallMap3() {
  mapboxgl.accessToken = import.meta.env.VITE_TEST_MAPBOX_ACCESS_TOKEN;

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(114.1020);
  const [lat, setLat] = useState(22.3350);
  const [zoom, setZoom] = useState(10.0);
  // const [colorArray, setColorArray] = useState([])
  // const [districtArray, setDistrictArray] = useState([])

  // Mapping table for district names
  const districtMapping = {
    "Central & Western District": ["Central & Western"],
    "Eastern District": ["Eastern"],
    "North District": ["Fanling/ Sheung Shui", "NENT (Other Area)"],
    "Kowloon City": ["Kowloon City"],
    "Kwai Tsing": ["Kwai Chung", "Tsing Yi"],
    "Kwun Tong": ["Kwun Tong"],
    "Sai Kung": ["Ma On Shan", "SENT (Other Area)", "Tseung Kwan O"],
    "Islands District": ["North Lantau"],
    "Yuen Long": ["NWNT (Other Area)", "Tin Shui Wai", "Yuen Long"],
    "Sham Shui Po": ["SWNT (Other Area)"],
    "Sha Tin": ["Sha Tin"],
    "Yau Tsim Mong": ["Sham Shui Po", "Yau Ma Tei", "Mong Kok"],
    "Southern District": ["Southern"],
    "Tai Po": ["Tai Po"],
    "Tsuen Wan": ["Tsuen Wan"],
    "Tuen Mun": ["Tuen Mun"],
    "Wan Chai": ["Wan Chai"],
    "Wong Tai Sin": ["Wong Tai Sin"],
  };

  function getColor(maxRainfall) {
    if (maxRainfall >= 100) return '#ff0000';
    else if (maxRainfall > 49) return '#ffff00';
    else return '#00ff00';
  }

  useEffect(() => {

    const colors = []
    const districts = []

    let weatherData = {}
    let geoData = {}

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

      // //fetch current weather
      // const weatherResponse = await fetch('/mockCurrentWeather.json');
      // const weatherData = await weatherResponse.json();

      // //fetch geoJson
      // const geoResponse = await fetch('/districtsBoundariesIndented.geojson');
      // const geoData = await geoResponse.json();

      try {
        //fetch current weather
        // const weatherResponse = await fetch('/mockCurrentWeather.json');
        const weatherResponse = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en');
        if (!weatherResponse.ok) {
          console.log('Failed to fetch current weather data');
        }
        weatherData = await weatherResponse.json();
    
        //fetch geoJson
        const geoResponse = await fetch('/districtsBoundariesIndented.geojson');
        if (!geoResponse.ok) {
          console.log('Failed to fetch geoJson data');
        }
        geoData = await geoResponse.json();
    
      } catch (error) {
        console.log('Error fetching data:', error.message);
      }



      map.current.addSource('districts', {
        type: 'geojson',
        data: geoData
      });

      // Use the mapping table to relate weather data to geojson features
      geoData.features.forEach(feature => {
        const districtName = feature.properties.PDD_Eng;
        // console.log(`districtName: ${districtName}`)
        districts.push(districtName)

        const weatherPlace = Object.keys(districtMapping).find(key => districtMapping[key].includes(districtName));
        // console.log(`weatherPlace: ${weatherPlace}`)

        const weather = weatherData.rainfall.data.find(d => d.place === weatherPlace);
        // console.log(`weather: ${weather}`)

        const maxRainfall = weather ? weather.max : 0;
        // console.log(`maxRainfall: ${maxRainfall}`)

        const color = getColor(maxRainfall)

        // console.log(`$color: ${color}`)
        colors.push(color)

      });

      // console.log(`colors: ${colors}`)
      // console.log(`colors length: ${colors.length}`)

      // console.log(`districts: ${districts}`)
      // console.log(`districts length: ${districts.length}`)

      for (let i = 0; i < districts.length; i++){
        // console.log(`in for loop, district:${districts[i]}, color"${colors[i]}`)

        map.current.addLayer({
            id: uuidv4(),
            type: 'fill',
            source: 'districts',
            filter: ['==', 'PDD_Eng', districts[i]], 
            paint: {
              'fill-color': colors[i], 
              'fill-opacity': 0.3
            }
        });
      }

      map.current.addLayer({
        id: uuidv4(),
        type: 'line',
        source: 'districts',
        paint: {
          'line-color': '#000',
          'line-width': 1.5
        }
      });

      // Add a new layer for the text labels
      // map.current.addLayer({
      //   id: 'districts-labels',
      //   type: 'symbol',
      //   source: 'districts',
      //   layout: {
      //     'text-field': ['get', 'PDD_Eng'], // Use the 'PDD_Eng' property of the geojson data
      //     'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
      //     'text-radial-offset': 0.5,
      //     'text-justify': 'auto',
      //     'text-size': 12
      //   },
      //   paint: {
      //     'text-color': '#ffffff',
      //     'text-halo-color': '#000000',
      //     'text-halo-width': 1
      //   }
      // });

    });
        
  }, [])


  return (
    <>
      <div ref={mapContainer} style={{
        maxWidth: "800px",
        height: "840px",
        marginTop: '20px',
        position: "relative"
      }}/>  
    </>
  )
}
    
export default DistrictRainfallMap3