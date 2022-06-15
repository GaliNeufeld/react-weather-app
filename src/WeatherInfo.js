import React from "react";
import Today from "./Today";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">

      <br />
      <h1>
        {props.info.city}, {props.info.country}
      </h1>
      
        <Today date={props.info.date} />
      

      <hr />
      <p className="description">{props.info.description}</p>
      <div className="row main">
        <div className="col-6 now">
          <img
            className="icon"
            src={props.info.iconUrl}
            alt={props.info.description}
          />
          <span className="temperature" id="temperature">
            {" "}
            {Math.round(props.info.temperature)}°F{" "}
          </span>
          <span className="units">
            <a href="/" id="celsius-link">
              C°
            </a>{" "}
            |{" "}
            <a href="/" id="fahrenheit-link" className="active">
              F°
            </a>
          </span>
        </div>
        {""}

        <div className="col-6 values">
          <span className="humidity">
            {" "}
            Humidity: <strong>{props.info.humidity}% </strong>
          </span>
          <div className="row-1">
            <div className="col">
              <span className="wind">
                Wind: <strong>{Math.round(props.info.wind)} m/ph</strong>
              </span>
            </div>
          </div>
          <div className="row-2">
            <div className="col">
              <span className="feelsLike" id="feelsLike">
                Feels like: <strong>{Math.round(props.info.feelsLike)}°F</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
