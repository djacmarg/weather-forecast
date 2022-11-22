import React, { useState } from "react";
import Search from "./components/search";
import CurrentWeather from "./components/current";
import ForecastWeather from "./components/forecast";
import { OPEN_WEATHER_API_URL, OPEN_WEATHER_API_KEY } from "./utils/api";

function App() {
  //create hooks to fetch
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetcher = fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    const forecastWeatherFetcher = fetch(
      `${OPEN_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetcher, forecastWeatherFetcher])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(forecastWeather);
  return (
    <div className="app">
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecastWeather && <ForecastWeather data={forecastWeather} />}
      </div>
    </div>
  );
}
export default App;
