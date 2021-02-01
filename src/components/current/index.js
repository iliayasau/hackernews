import React from 'react';
import Icon from '../icon';

const Current = ({
  description,
  temperature
}) => {
  return (
    <div class="current-weather">
      <h2>Today</h2>
      <div class="icon-info-wrapper">
        {description && <Icon description={description} size="200" />}
        <div class="info">
          <div class="temperature">
            {temperature}&#176;
          </div>
          <div class="description">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Current;

