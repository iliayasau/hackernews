import React from 'react';
import { ReactComponent as Clear } from '../../images/clear.svg';
import { ReactComponent as Clouds } from '../../images/clouds.svg';
import { ReactComponent as Rain } from '../../images/rain.svg';
import { ReactComponent as Snow } from '../../images/snow.svg';

const Icon = ({
  description, size
}) => {
  if (description === 'Clear') {
    return (
      <Clear width={size} height={size} />
    );
  } else if (description === 'Clouds') {
    return (
      <Clouds width={size} height={size} />
    );
  } else if (description === 'Rain') {
    return (
      <Rain width={size} height={size} />
    );
  } else if (description === 'Snow') {
    return (
      <Snow width={size} height={size} />
    );
  } else {
    return (
      <Clear width={size} height={size} />
    );
  }
};

export default Icon;