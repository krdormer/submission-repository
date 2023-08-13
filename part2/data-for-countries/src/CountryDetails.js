import { useEffect, useState } from "react";

export function CountryDetails({ name, capital, area, languages, flagImg, weather }) {
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    if (weather.weather) {
      fetch(`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`)
        .then((response) => response.blob())
        .then((data) => setWeatherIcon(URL.createObjectURL(data)));
    }
  }, [weather.weather]);

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <p>{`Capital: ${capital}`}</p>
        <p>{`Area: ${area}`}</p>
      </div>
      <div>
        <h2>Languages</h2>
        <ul>
          {Object.values(languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={flagImg} alt="flag" />
      </div>
      <div>
        <h2>Weather in {capital}</h2>
        <p>Temperature: {weather?.main?.temp} Farenheit</p>
        <img src={weatherIcon} alt='Weather icon' style={{ width: '100px' }}/>
        <p>Wind: {weather?.wind?.speed} mph</p>
      </div>
    </div>
  );
}
