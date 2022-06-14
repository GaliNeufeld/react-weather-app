import React from "react";
import "./Date.css";
 
 export default function Date(props) {
    let year = props.date.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[props.date.getMonth()];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let date = props.date.getDate();
    return (
    <h5>
        `Last updated: {day},{" "}{month}{" "}{date}, {" "}{year}{" "} {hours}:{minutes}`
     </h5>
    );
 }
