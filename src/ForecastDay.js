import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon
        iconImg={props.data.condition.icon_url}
        iconDesc={props.data.condition.icon}
      />
      <div className="Forecast-temperatures">
        <span className="Forecast-temperature-min text-black-50">
          {minTemperature()} -{" "}
        </span>
        <span className="Forecast-temperature-max">{maxTemperature()}</span>
      </div>
    </div>
  );
}
