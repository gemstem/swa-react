
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [temperatureData, setTemperatureData] = useState([])

  useEffect(() => {
    getTemperatureData().then(data => {
        console.log(data)
        setTemperatureData(data)
     });
  }, [])

  async function getTemperatureData() {

    const response = await fetch("api/TemperatureApi");
    return await response.json();
}

  return (
    <div className="App">
      <h1>React App</h1>
      <p>{temperatureData.currentTemperature}</p>
    </div>
  );
}

export default App;
