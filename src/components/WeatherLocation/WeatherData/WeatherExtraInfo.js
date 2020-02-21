import React from 'react'
import PropTypes from 'prop-types'
import './style.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className='weatherExtraInfoCont'>
        Información Extra
        {/* <br/> */}
        <span>{ `${humidity}% - ${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired, // ptnr abreviacion
    wind: PropTypes.string.isRequired, // ptsr
};
export default WeatherExtraInfo;