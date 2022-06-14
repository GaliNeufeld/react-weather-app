import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ready: false });
  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: "Wednesday June 15, 2022",
      temperature: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
    });
   
  }
  if(weatherData.ready) {

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
            src={weatherData.iconUrl}
            alt={weatherData.description}
          />
          <span className="temperature" id="temperature">
            {" "}
            {Math.round(weatherData.temperature)}°F{" "}
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
            Humidity: <strong>{weatherData.humidity}% </strong>
          </span>
          <div className="row-1">
            <div className="col">
              <span className="wind">
                Wind: <strong>{weatherData.wind} m/ph</strong>
              </span>
            </div>
          </div>
          <div className="row-2">
            <div className="col">
              <span className="feelsLike" id="feelsLike">
                Feels like: <strong>{weatherData.feelsLike}°F</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
   } else {
    const apiKey = "c5b46e313ac60a38d46e9623287e0a7d";
  
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

     return "Loading...";
   }
}
