import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              id="city-input"
              className="form-control shadow-sm"
              placeholder="Enter city name..."
            />
          </div>
          <div className="col-6">
            <input type="submit" className="btn btn-warning" value="search" />
            <button className="btn btn-success" id="current-location-button">
              My location 📍
            </button>
          </div>
        </div>
      </form>

      <br />
      <h1>New York</h1>
      <p className="date">Last updated on: Wednesday June 15, 2022</p>

      <br />
      <hr />
      <p className="description">Clear</p>
      <div className="row main">
        <div className="col-6 now">
          <img
            className="icon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          <span className="temperature" id="temperature">
            {" "}
            79°F{" "}
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
            Humidity: <strong>57% </strong>
          </span>
          <div className="row-1">
            <div className="col">
              <span className="wind">
                Wind: <strong>9 m/ph</strong>
              </span>
            </div>
          </div>
          <div className="row-2">
            <div className="col">
              <span className="feelsLike" id="feelsLike">
                Feels like: <strong>78°F</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
