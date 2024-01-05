import { useEffect, useState } from "react";
import CountryFlag from "../utils/CountryFlag";

export default function useForecastWeather(query) {
  const [displayLocationLocation, setDisplayLocation] = useState("");
  const [weatherUpdate, setWeatherUpdate] = useState({});
  const [isLaoding, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const controller = new AbortController();

  const searchCountryWeatherForecast = async () => {
    if (query?.length < 2) {
      setIsError(null);
      setWeatherUpdate({});
    }
    try {
      setIsLoading(true);
      const locRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
        { signal: controller.signal }
      );
      if (!locRes.ok) throw new Error("Fetching Data Failed");
      const locData = await locRes.json();
      if (!locData.results) throw new Error("Location Was Not Found");
      const { name, country_code, latitude, longitude, timezone } =
        locData.results.at(1);
      setDisplayLocation(`${name} ${CountryFlag(country_code)}`);

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}2&longitude=${longitude}&&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      setWeatherUpdate(weatherData.daily);
      setIsError(null);
    } catch (err) {
      if (err.name !== "AbortError") setIsError(err.message);
    } finally {
      setIsLoading(false);
    }

    if (!query?.length) {
      setIsError(null);
      setWeatherUpdate({});
      return;
    }
  };

  useEffect(() => {
    async function WeatherResult() {
      searchCountryWeatherForecast();
    }
    WeatherResult();
    return function () {
      controller.abort();
    };
  }, [query]);

  return {
    displayLocationLocation,
    weatherUpdate,
    isLaoding,
    isError,
    setWeatherUpdate,
  };
}
