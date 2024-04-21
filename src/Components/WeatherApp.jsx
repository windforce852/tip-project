
import useWeather from "../Hooks/useOpenWeather"

function WeatherApp() {

  const { weatherData, loading, error } = useWeather();
  console.log(weatherData)

  if (loading) {
    return (
      <div style={{ background: '#2b838f', width: '100%', height: '300px' }}>
        <div>Loading...</div>;
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ background: '#2b838f', width: '100%', height: '300px' }}>
        <div>Error: {error}</div>;
      </div>
    )
  }

  if (!weatherData) {
    return (
      <div style={{ background: '#2b838f', width: '100%', height: '300px' }}>
        <div>No weather data available.</div>
      </div>
    )
  }

  const { list } = weatherData;
  const firstDayWeather = list[0];
  const { dt, main, weather, wind } = firstDayWeather;
  const { temp, humidity } = main;
  const { description } = weather;
  const { speed } = wind;

  return (
    <>
      <div style={{ background: '#2b838f', width: '100%', height: '300px' }}>
        <h2>Weather App Component</h2>
        <p>This is the Weather App component.</p>
        <ul>
          <li>Temperature: { temp  - 273.15}°C </li>
          <li>Humidity: { humidity }%</li>
          <li>Weather: { description }</li>
          <li>Wind speed: { speed }</li>
        </ul>
      </div>
    </>
  )
}

export default WeatherApp