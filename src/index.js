import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/weather';
import './styles/index.css';

function App() {
  return (
    <div className="app">
      <Weather />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));