import React, { useState } from "react";

const api = {
  key: "a385157eb5d2d1a2e91b7499206ea097",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (event) => {
    if (event.key === "Enter") {
      const res = await fetch(
        `${api.base}weather?q=${location}&units=metric&APPID=${api.key}`
      );
      const data = await res.json();
      setWeather(data);
      setLocation("");
      console.log(data);
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15°c</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
};

export default App;
