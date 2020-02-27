import React from 'react';
import PropTypes from 'prop-types'
import './style.css'

const Location = (props) => {
    // Destructuring, cuando tenemos una propiedad con un 
    // nombre qu asiganmos a una variable o constante cpn mismo nombre lo asignamos directamente de la siguiente manera
    const {city} = props; // es como decir const city = props.city;
    // debugger; // esto me da un punto de interrupcion
    return (
    <div className = 'LocationCont'>
        <h1>{ city }</h1>
    </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired, // ptsr la abreviacion para escribir  toda la frase
};
export default Location;