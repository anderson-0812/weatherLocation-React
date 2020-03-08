import React, { Component } from 'react'; // Siempre se importa reac
//  Importamos oitro componente que creamos
import Location from './Location'
// en una importacion solo conelnombre de carpeta automaticamente busca el idex.js 
// es lo mismo que tener => './WeatherData/index.js'
import WeatherData from './WeatherData'
// importo de una a una para soloimportar lo que necesito
import {
    // CLOUD,
    // CLOUDY,
    SUN,
    // RAIN,
    // SNOW,
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
const data2 = {
    tempeture: 25,
    weatherState: WINDY,
    humidity: 80,
    wind: '19m/s',
}

class WeatherLocation extends Component {

    constructor(){
        super();// es el costructor de nuestro componente base Component
        this.state = {
            city: 'Loja - Ecuador',
            data: data,
        }
    }

    handleUpdateClick = () =>{
        // alert('actualizado');
        console.log('actualizado');
        console.log(data2);
        // siempre se ocupa setState para actualizar el estado
        this.setState({
            city: 'Cuenca',
            data: data2
        });
    };
    render(){
        const {city, data} = this.state;
        return(
        <div className='weatherLocationCont'>
            <h2> <Location city={city}></Location> </h2> 
         <WeatherData data = {data}></WeatherData>
         <button onClick = { this.handleUpdateClick } >Actualizar</button>
        </div>

        );
    }
};

// Siempre se exporta el componente
export default WeatherLocation;