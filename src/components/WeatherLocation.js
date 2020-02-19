import React from 'react'; // Siempre se importa reac
//  Importamos oitro componente que creamos
import Location from './Location'
import WeatherData from './WeatherData'

const WeatherLocation = () => (
    <div> 
        <h2> <Location></Location> </h2> 
        <WeatherData></WeatherData>
    </div>
);

// Siempre se exporta el componente
export default WeatherLocation;