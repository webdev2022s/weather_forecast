import "../css/weather.css";
import { useRef, useState } from "react";
import useForecastWeather from "../hooks/useForecastWeather";
import CountryWeather from "./CountryWeather";
import useKey from "../hooks/useKey";
import useLocalStorage from "../hooks/useLocalStorage";
import DateTime from "./DateTime";
export default function ClassWeather() {
  const [isCountryName, setIsCountryName] = useLocalStorage();
  const { displayLocationLocation, weatherUpdate, isLaoding, isError } =
    useForecastWeather(isCountryName);

  const inputEl = useRef(null);
  const inputHandler = () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setIsCountryName((data) => (data = ""));
  };

  useKey("Enter", inputHandler);

  return (
    <>
      <div className="app">
        <h1>Weather Forecast</h1>
        <input
          type="text"
          value={isCountryName}
          placeholder="Search Location"
          onChange={(e) => setIsCountryName(e.target.value)}
          ref={inputEl}
        />
        {isLaoding && <p>Loading Fetching Data...</p>}
        {weatherUpdate?.weathercode && (
          <CountryWeather
            weather={weatherUpdate}
            location={displayLocationLocation}
          />
        )}
        {isError && <p>{isError}</p>}
      </div>
      <DateTime />
    </>
  );
}
