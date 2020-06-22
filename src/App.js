import React from 'react';
import './App.css';
import Title from './components/title';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "f67c7bca234119325128bab94e8f7dbc";

class App extends React.Component { 
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  // ToDo: Do something about this!
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();

    if(city && country){
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } 
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Did you forget to enter the values?"
      });
    }

  }
  render(){
    const { city,country,temperature,humidity,description,error } = this.state;
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather city={city} country={country}
            temp={temperature} humidity={humidity} 
            description={description} error={error} />
      </div>
    );
  }
}

export default App;
