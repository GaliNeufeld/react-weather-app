import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
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

