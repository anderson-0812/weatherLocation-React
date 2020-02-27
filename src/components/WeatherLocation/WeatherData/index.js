import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTempeture from './WeatherTempeture'
// importo de una a una para soloimportar lo que necesito
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers'

import './style.css';
// destructuring con objetos complejos {tempeture, weatherState, humidity, wind}
const WeatherData = ({ data: {tempeture, weatherState, humidity, wind} }) => {
    // const {tempeture, weatherState, humidity, wind} = data;
    return (<div className='weatherDataCont'>
        <WeatherTempeture
            tempeture = {tempeture}
            weatherState = {weatherState}
            >
        </WeatherTempeture>
        <WeatherExtraInfo humidity = {humidity} wind={wind}></WeatherExtraInfo>
    </div>);
};

export default WeatherData;