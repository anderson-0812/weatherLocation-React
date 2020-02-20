import React from 'react'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        Información Extra 
        <br/>
        <span>{ `${humidity}% - ${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;