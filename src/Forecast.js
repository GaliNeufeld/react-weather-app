import React, { useState, useEffect } from "react";

import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(props);

  function load() {
    let apiKey = "303b041t9dc7c1ce08f4ao48696a7fa8";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-sm days" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
  }
}
