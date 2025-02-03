import React from "react";
import { useState } from "react";

const Temperature = () => {
  const [temperature, setTemperature] = useState(100);
  let temp = 0;
  function increase() {
    setTemperature(temperature + 1);
  }
  return (
    <div>
      <h1>Temperature</h1>
      <h2>Current Temperature {temperature} deg</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Temperature;
