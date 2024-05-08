import React from "react";

export default function WeatherIcon(props) {
  return <img src={props.iconUrl} alt={props.icon}></img>;
}
