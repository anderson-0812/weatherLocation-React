import React from'react'
import WeatherIcons from 'react-weathericons'
// para validaciones de tipos de datos lo ahcemos con PropTypes
import PropTypes from 'prop-types'
// importo de una a una para soloimportar lo que necesito
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers'

const icons = {
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy",

};
// de lo que me envie weatherState es sera el icono si no hay nada x defectos era day-sunny
const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];

    if (icon)
        return <WeatherIcons name={icon} size="2x" />
    else
        return <WeatherIcons name={'day-sunny'} size="2x" />
}

// Armo el componente l=con el icono adecuado llamando a la funcion getWeatherIcon
const WeatherTempeture = ({tempeture, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${tempeture}C*`}</span>
    </div>
);

// creamos la validacion PropTypes
WeatherTempeture.propTypes = {
    tempeture: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTempeture;