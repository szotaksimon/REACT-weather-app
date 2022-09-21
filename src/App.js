import React, { useState } from "react";
import axios from "axios";

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=47.5338&lon=19.1330&appid=03c029603987f9fd2ff2b1e5933057d6`;

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Budapest</p>
          </div>
          <div className="temp">
            <h1>18C</h1>
          </div>
          <div className="description">
            <p>felhős</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>20C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            20KPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
