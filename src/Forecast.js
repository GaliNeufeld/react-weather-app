import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props);

    let apiKey = "c5b46e313ac60a38d46e9623287e0a7d";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    
    return (
      <div className="Forecast">
        <div className="row">
          
          <div className="col days">
            <div className="Forecast-day">Thur</div>
            <WeatherIcon icon="01d" size={36} />
            <div className="Forecast-temperatures">
              <span className="Forecast-temperature-min text-black-50">65 -</span>
              <span className="Forecast-temperature-max">82</span>
            </div>
          </div>

        </div>
      </div>
    );
}

