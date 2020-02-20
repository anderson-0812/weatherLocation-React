import React from'react'
import WeatherIcons from 'react-weathericons'

const icons = {
    sunny: 'day-sunny',
    fog: 'day-fog',

}
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

export default WeatherTempeture;