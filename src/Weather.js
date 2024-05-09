import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity.replace(" ", "-"));
  const [weatherData, setWeatherData] = useState({ ready: false });

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "303b041t9dc7c1ce08f4ao48696a7fa8";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      iconImg: response.data.condition.icon_url,
      iconDesc: response.data.condition.icon,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.temperature.feels_like,
      city: response.data.city.replace(" County", ""),
      country: response.data.country.replace("United States of America", "USA"),
      coordinates: response.data.coordinates,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} id="search-form">
          <div className="row">
            <div className="col-sm-6">
              <input
                onChange={updateCity}
                type="search"
                id="city-input"
                className="form-control shadow-sm"
                placeholder="Enter city name..."
              />
            </div>
            <div className="col-sm-6">
              <input type="submit" className="btn btn-warning" value="Search" />
            </div>
          </div>
        </form>
        <WeatherInfo info={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
