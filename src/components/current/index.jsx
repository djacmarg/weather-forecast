import React from "react";
import "./index.css";

const CurrentWeather = ({ data }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date();
  let today = weekday[day.getDay()];

  return (
    <div className="curent-weather-caption">
      <div className="widget-top">
        <div className="location">
          {data.name ? (
            <p className="bold">
              {data.name}, {data.sys.country}
            </p>
          ) : null}
          <p className="coordinates">
            {data.coord ? data.coord.lon.toFixed() : null}°/
            {data.coord ? data.coord.lat.toFixed() : null}°
          </p>
          <div className="temp">
            {data.main ? <h3>{data.main.temp.toFixed()}°C</h3> : null}
          </div>
        </div>

        <div className="description">
          {data.weather ? (
            <p className="flexit">
              {data.weather[0].description}{" "}
              <img
                alt="weather-icon"
                className="weather-icon"
                src={`icons/${data.weather[0].icon}.png`}
              />
            </p>
          ) : null}
          <h4>{today}</h4>
        </div>
      </div>

      <div className="widget-bottom">
        <div className="humidity">
          <p className="thin">Humidity</p>
          {data.main ? (
            <p className="thin">
              <span>{data.main.humidity}% </span>
            </p>
          ) : null}
        </div>

        <div className="feels">
          <p className="thin">Feels Like</p>
          {data.main ? (
            <p className="thin">{data.main.feels_like.toFixed()}°C</p>
          ) : null}
        </div>

        <div className="feels">
          <p className="thin">Wind Speed</p>
          {data.main ? (
            <p className="thin">{data.wind.speed.toFixed()}MPH</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
