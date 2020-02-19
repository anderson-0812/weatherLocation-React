import React from 'react';

const Location = (props) => {
    // Destructuring, cuando tenemos una propiedad con un 
    // nombre qu asiganmos a una variable o constante cpn mismo nombre lo asignamos directamente de la siguiente manera
    const {city} = props; // es como decir const city = props.city;
    // debugger; // esto me da un punto de interrupcion
    return (
    <div>
        <h1>{ city }</h1>
    </div>
    );
};

export default Location;