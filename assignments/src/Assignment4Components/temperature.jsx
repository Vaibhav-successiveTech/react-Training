"use client";
import { useEffect, useState } from "react";
// (32°F − 32) × 5/9 = 0°C
// °F = °C × (9/5) + 32

export default function TemperatureComponent() {
  let [celcius, setCelcius] = useState(0);
  let [fahrenite, setFahrenite] = useState(32);

  function FtoC(e) {
    const { value } = e.target;
    setFahrenite(value);
    setCelcius((value - 32) * (5 / 9));
  }
  
  function CtoF(e) {
    const { value } = e.target;
    setCelcius(value);
    setFahrenite((value * 9) / 5 + 32);
  }

  return (
    <>
      <input value={celcius} type="number" onChange={CtoF} />
      <label> Celcius </label>
      <br />
      <br />
      <input value={fahrenite} type="number" onChange={FtoC} />
      <label> Fahrenite </label>
    </>
  );
}
