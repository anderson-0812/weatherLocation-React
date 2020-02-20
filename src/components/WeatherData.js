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
} from './../constants/weathers'

const WeatherData = () => (
    <div>
        <WeatherTempeture 
            tempeture = {20}
            weatherState = {CLOUDY}
            >
        </WeatherTempeture>
        <WeatherExtraInfo humidity = {80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;