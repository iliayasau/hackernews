import React from 'react';

const Tabs = ({
  cities, currentCity, setCurrentCity
}) => {
  return (
    <ul className="tabs">
      {cities.map((item) => {
        if (item === currentCity) {
          return (
            <li key={item}>
              <span>{item.toUpperCase()}</span>
            </li>
          )
        }
        return (
          <li key={item}>
            <button
              onClick={() => setCurrentCity(item)}
            >
              {item.toUpperCase()}
            </button>
          </li>
        )
      })}
    </ul>
  )
};

export default Tabs;