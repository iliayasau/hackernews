import React, { useEffect, useState } from "react";
import Tabs from '../tabs';
import WeatherInfo from '../weatherInfo';
import { myInit, appId, allowCors } from '../../variables';

const cities = ["ottawa", "moscow", "tokyo"];

function Weather() {
  const [weather, setWeather] = useState({});
  const [nextDays, setNextDays] = useState([]);
  const [currentCity, setCurrentCity] = useState(cities[0]);

  const fetchNewCity = (city) => {
    return fetch(
        `${allowCors}http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`,
        myInit
      )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  }

  const fetchNextDays = (lat, lon) => {
    return fetch(
        `${allowCors}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${appId}`,
        myInit
      )
      .then((response) => response.json())
      .then((data) => {
        setNextDays(data.daily);
      });
  }

  useEffect(() => {
    fetchNewCity(currentCity);
  }, [currentCity]);

  useEffect(() => {
    if (weather && weather.coord)
      fetchNextDays(weather.coord.lat, weather.coord.lon);
  }, [weather, currentCity]);

  return (
    <div className="wrapper">
      <Tabs
        cities={cities}
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
      />
      <WeatherInfo
        weather={weather}
        nextDays={nextDays}
      />
    </div>
  );
}

export default Weather;