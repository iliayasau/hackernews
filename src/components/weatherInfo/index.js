import React from 'react';
import tuc from 'temp-units-conv';
import Current from '../current';
import Daily from '../daily';

const WeatherInfo = ({
  weather, nextDays
}) => {
  return (
    <div className="weather-info">
      <Current
        description={
          weather &&
          weather.weather &&
          weather.weather[0].main
        }
        temperature={
          weather &&
          weather.main &&
          parseInt(tuc.k2c(weather.main.temp))
        }
      />
      <Daily nextDays={nextDays.slice(1,5)} />
    </div>
  )
};

export default WeatherInfo;