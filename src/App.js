import React, { useState } from "react";
import axios from "axios";

import classes from "./styles/style.module.scss";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  let timestamp = data.dt;
  let current_time = new Date(timestamp * 1000);



  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=03c029603987f9fd2ff2b1e5933057d6&lang=hu&units=metric`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=budapest&appid=03c029603987f9fd2ff2b1e5933057d6&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className={classes.App}>
      <div className={classes.search}>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Hol vagy most?"
          type="text"
        />
      </div>
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.location}>
            <p>{data.name}</p>
          </div>
          <div className={classes.temp}>
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className={classes.time}>
          </div>
          <div className={classes.description}>
            {data.weather ? (
              <p className={classes.discriptionptag}>
                {data.weather[0].description}
              </p>
            ) : null}
          </div>
          <div className={classes.time}>
            {data.main ? <h2>ekkor mérve: {current_time.toLocaleString()}</h2> : null}
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.feels}>
            {data.main ? (
              <p className={classes.bold}>{data.main.feels_like}°C</p>
            ) : null}
            <p>Hőérzet</p>
          </div>
          <div className={classes.humidity}>
            {data.main ? <p className={classes.bold}>{data.main.humidity}%</p> : null}
            <p>Páratartalom</p>
          </div>
          <div className={classes.wind}>
            {data.main ? <p className={classes.bold}>{data.wind.speed}KM/H</p> : null}
            <p>Szélerősség</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
