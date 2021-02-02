import React from 'react';
import Icon from '../icon';
import tuc from 'temp-units-conv';
import { fromUnixTime } from 'date-fns';

const Daily = ({
  nextDays
}) => {
  return (
    <div className="daily-forecast">
      {nextDays.map((item) => {
        return (
          <div key={item.dt}>
            <div className="weekday">
              {fromUnixTime(item.dt).toString().slice(0,3)}
            </div>
            {item.weather[0].main &&
              <Icon description={item.weather[0].main} size="100" />
            }
            <div className="temperature">
              {parseInt(tuc.k2c(item.temp.day))}&#176;
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default Daily;



