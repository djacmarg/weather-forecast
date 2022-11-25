import React from "react";
import "./index.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastWeather = ({ data }) => {
  const DayInWeek = new Date().getDay();
  //console.log(DayInWeek);
  const forecastDays = WEEK_DAYS.slice(DayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, DayInWeek)
  );
  return (
    <>
      <label className="title">
        Credit to GEO DB & OpenWeatherApp for thier APIs
      </label>
      {data.list.splice(0, 7).map((item, idx) => (
        <Accordion allowZeroExpanded>
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-items">
                  <img
                    alt="weather-forecast"
                    className="small-icon"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>

                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {item.main.temp_min.toFixed()}°C /{" "}
                    {item.main.temp_max.toFixed()}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="details-grid">
                <div className="items-grid">
                  <label>Pressure</label>
                  <label>{item.main.pressure}kPa</label>
                </div>
                <div className="items-grid">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="items-grid">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="items-grid">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="items-grid">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="items-grid">
                  <label>Feels Like:</label>
                  <label>{item.main.feels_like.toFixed()}</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export default ForecastWeather;
