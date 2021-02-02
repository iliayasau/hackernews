import React from 'react';
import Icon from '../icon';

const Current = ({
  description,
  temperature
}) => {
  return (
    <div className="current-weather">
      <h2>Today</h2>
      <div className="icon-info-wrapper">
        {description && <Icon description={description} size="200" />}
        <div className="info">
          <div className="temperature">
            {temperature}&#176;
          </div>
          <div className="description">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Current;

