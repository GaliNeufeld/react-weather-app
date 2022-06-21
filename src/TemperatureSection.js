import React, { useState } from "react";


export default function TemperatureSection (props){
   const [unit, setUnit] = useState("fahrenheit"); 
   
   function showCelsius (event) {
    event.preventDefault();
    setUnit("celsius");
   }

   function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
   }
     if (unit === "fahrenheit") {
      return (
        <span className="TemperatureSection">
          <span className="temperature">
            {" "}
            {Math.round(props.fahrenheit)}
          </span>
          °F{" "}
          <span className="units">°
            <a href="/" onClick={showCelsius}>
              C
            </a>{" "}
            |<span className="active"> °F</span>
          </span>



        </span>
      );
     } else {
        let celsius = (props.fahrenheit - 32) / 1.8;
        return (
          <span className="TemperatureSection">
            <span className="temperature">
              {" "}
              {Math.round(celsius)}°C{" "}
            </span>
            <span className="units">
              <span className="active">°C |{" "}°</span>
               <a href="/" onClick={showFahrenheit}>
                F
               </a>
              
            </span>
          </span>
        );
     }
    } 

