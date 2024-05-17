import React from "react";
import "./WeatherConditions.css";

export default function WeatherConditions(props) {
    return (
            <div className="col-sm-6 values">
              <span className="humidity">
                {" "}
                Humidity: <strong>{props.humidity}% </strong>
              </span>
              <div className="row-1">
                <div className="col">
                  <span className="wind">
                    Wind: <strong>{Math.round(props.wind)}{props.windUnit}</strong>
                  </span>
                </div>
              </div>
              <div className="row-2">
                <div className="col">
                  <span className="feelsLike">
                    Feels like:{" "}
                    <strong>{Math.round(props.feelsLike)}{props.feelsLikeUnit}</strong>
                  </span>
                </div>
              </div>
            </div>);
    
}
