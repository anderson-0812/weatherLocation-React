import React from 'react'; // Siempre se importa reac
//  Importamos oitro componente que creamos
import Location from './Location'
// en una importacion solo conelnombre de carpeta automaticamente busca el idex.js 
// es lo mismo que tener => './WeatherData/index.js'
import WeatherData from './WeatherData'

const WeatherLocation = () => (
    <div> 
        <h2> <Location city={"Loja - Ecuador"}></Location> </h2> 
        <WeatherData></WeatherData>
    </div>
);

// Siempre se exporta el componente
export default WeatherLocation;