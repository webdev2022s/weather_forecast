import WeatherWeekly from "./WeatherWeekly";

export default function CountryWeather({ weather, location }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: day,
    weathercode,
  } = weather;
  return (
    <>
      <div>
        <h2>Weather this week at {location}</h2>
        <ul className="weather">
          {day.map((data, i) => {
            return (
              <WeatherWeekly
                days={data}
                key={data}
                max={max.at(i)}
                min={min.at(i)}
                weathercode={weathercode.at(i)}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
