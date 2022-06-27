import React from "react";

 
 export default function Today(props) {
    let year = props.date.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[props.date.getMonth()];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    hours = props.date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    let date = props.date.getDate();
    return (
      <p className="text-center date">
        Last updated: {day}, {month} {date}, {year} at {hours}
      </p>
    );
 }
