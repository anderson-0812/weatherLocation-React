import React, { Component } from 'react'; // Siempre se importa reac
//  Importamos oitro componente que creamos
import Location from './Location'
// en una importacion solo conelnombre de carpeta automaticamente busca el idex.js 
// es lo mismo que tener => './WeatherData/index.js'
import WeatherData from './WeatherData'
// importo de una a una para soloimportar lo que necesito
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers'
import './style.css'
// import { Component } from 'react';

const data = {
    tempeture: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10m/s',
}

class WeatherLocation extends Component {
    render(){
        return(
        <div className='weatherLocationCont'>
            <h2> <Location city={"Loja - Ecuador"}></Location> </h2> 
         <WeatherData data = {data}></WeatherData>
        </div>

        );
    }
};

// Siempre se exporta el componente
export default WeatherLocation;