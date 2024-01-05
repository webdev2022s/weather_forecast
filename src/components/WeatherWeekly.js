import DateFormat from "../utils/DatesFormat";
import WeatherIcon from "../utils/WeatherIcon";

export default function WeatherWeekly({ days, max, weathercode, min }) {
  return (
    <>
      <div>
        <li className="day">
          <span>{WeatherIcon(weathercode)}</span>
          <p style={{ fontSize: "1.5rem" }}>
            <strong>
              <em>{DateFormat(days)}</em>
            </strong>
          </p>
          <p>
            <strong>
              {Math.floor(min)}&deg; &mdash; {Math.ceil(max)}&deg;
            </strong>{" "}
          </p>
        </li>
      </div>
    </>
  );
}
