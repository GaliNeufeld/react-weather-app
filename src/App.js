import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" defaultCountry="US" />

        <footer>
            This project was coded by{" "}
            <a
              href="mailto:galneufeld@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Gali Neufeld
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/GaliNeufeld/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open sourced on GitHub
            </a>
        
        </footer>
      </div>
    </div>
  );
  
}


