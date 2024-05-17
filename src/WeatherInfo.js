import React, { useState } from "react";
import Today from "./Today";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherConditions from "./WeatherConditions";

export default function WeatherInfo(props) {

  const [unit, setUnit] = useState("fahrenheit");
  const [wind, setWind] = useState(props.info.wind);
  const [feelsLike, setFeelsLike] = useState(props.info.feelsLike);

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    setWind(wind * 1.609);
    setFeelsLike((feelsLike - 32) / 1.8);
  }

  function showFahrenheit(event) {
    event.preventDefault();
     setUnit("fahrenheit");
    setWind(props.info.wind);
    setFeelsLike(props.info.feelsLike);
  }
  return (
    <div className="WeatherInfo">
      <br />
      <h1 className="text-center">
        {props.info.city}, {props.info.country}
      </h1>

      <Today date={props.info.date} />

      <hr />
      <p className="description">{props.info.description}</p>

      <div className="row main text-center sm-mb-5">
        <div className="col-sm-6 now">
          <span className="icon">
            <WeatherIcon
              iconImg={props.info.iconImg}
              iconDesc={props.info.iconDesc}
            />
          </span>
          {unit === "fahrenheit" ? (
            <span className="TemperatureSection">
              <span className="temperature">
                {Math.round(props.info.temperature)}°F{" "}
              </span>

              <span className="units">
                °
                <a href="/" onClick={showCelsius}>
                  C
                </a>{" "}
                |<span className="active"> °F</span>
              </span>
            </span>
          ) : (
            <span className="TemperatureSection">
              <span className="temperature">
                {Math.round((props.info.temperature - 32) / 1.8)}°C{" "}
              </span>
              <span className="units">
                <span className="active">°C | °</span>
                <a href="/" onClick={showFahrenheit}>
                  F
                </a>
              </span>
            </span>
          )}
        </div>
        {""}
        <WeatherConditions
          wind={wind}
          windUnit={unit === "fahrenheit" ? " m/ph" : " km/h"}
          feelsLike={feelsLike}
          feelsLikeUnit={unit === "fahrenheit" ? " °F" : " °C"}
          humidity={props.info.humidity}
        />
      </div>
    </div>
  );
}
