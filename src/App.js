import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="container">
       <Weather defaultCity="New York"/>
      
      <footer className="text-center">
        This project was coded by{" "}
        <a href="mailto:galneufeld@gmail.com" target="_blank" rel="nonreferrer"> 
          Gali Neufeld
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/GaliNeufeld/react-weather-app"
          target="_blank" rel="nonreferrer"
        >
          open sourced on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
  
}


