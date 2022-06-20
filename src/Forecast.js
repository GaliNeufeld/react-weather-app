import React, { useState, useEffect } from "react";

import ForecastDay from "./ForecastDay";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
    setLoaded(false);       
    },[props.coordinates]);
    
    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    console.log(props);

    if (loaded) {
        console.log(forecast);   
        return (

      <div className="Forecast">
        <div className="row"> 
        {forecast.map(function(dailyForecast, index) {
            if (index < 5) { 
            return (
            <div className="col days" key={index}>
            
            <ForecastDay data={dailyForecast} />
         </div> 
            );
          } 
        })}
          
        </div>
      </div> 
        );
      
    } else {
let apiKey = "c5b46e313ac60a38d46e9623287e0a7d";
let latitude = props.coordinates.lat;
let longitude = props.coordinates.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(handleResponse);

return null;  
    }      
 }

