import React from 'react';

function Weather(props) {
    return (
        <div className="main-weather">
            {props.city && props.country && 
            <div>
                <p>Location: {props.city}, {props.country}</p>
                <p>Temperature: {props.temp}</p>
                <p>Humidity: {props.humidity}</p>
                <p>Conditions: {props.description}</p>            
            </div>
            }
            <h4 style={{color:"red"}}>{ props.error } </h4>
        </div>
    );
}

export default Weather;