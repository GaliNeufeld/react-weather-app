import React from "react";

export default function WeatherIcon(props) {
  return <img src={props.iconImg} alt={props.iconDesc}></img>;
}
