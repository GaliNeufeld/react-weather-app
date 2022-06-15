import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready: false });
  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "c5b46e313ac60a38d46e9623287e0a7d";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      country: response.data.sys.country,
    });

   
  }
  if(weatherData.ready) {

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit} id="search-form">
        <div className="row">
          <div className="col-6">
            <input onChange={updateCity}
              type="search"
              id="city-input"
              className="form-control shadow-sm"
              placeholder="Enter city name..."
            />
          </div>
          <div className="col-6">
            <input type="submit" className="btn btn-warning" value="Search" />
            <button className="btn btn-success" id="current-location-button">
              My location 📍
            </button>
          </div>
        </div>
      </form>
      <WeatherInfo info={weatherData} />
    </div>
  );
   } else {
    search();

     return "Loading...";
   }
}
