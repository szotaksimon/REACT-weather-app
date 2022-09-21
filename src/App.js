import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=03c029603987f9fd2ff2b1e5933057d6&units=metric`;
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
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Hol vagy most?"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like}°C</p> : null}
            <p>Hőérzet</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Páratartalom</p>
          </div>
          <div className="wind">
            {data.main ? <p className="bold">{data.wind.speed}KM/H</p> : null}
            <p>Szélerősség</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
