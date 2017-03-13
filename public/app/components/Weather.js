import React from 'react'

import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'

import openWeatherMap from '../api/openWeatherMap'

class Weather extends React.Component {
  constructor(props){
    super(props)
    console.log(openWeatherMap);
    this.state = {
      isLoading: false,
      location: this.props.location,
      temp: this.props.temp
    }
  }

  handleSearch(location){
    let self = this
    console.log(openWeatherMap);

    this.setState({isLoading: true})

    openWeatherMap.getTemp(location).then((temp) => {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, (err) => {
      self.setState({isLoading: false})
      alert(err)
    })
  }

  render(){
    let {isLoading, temp, location} = this.state

    let renderMessage = () => {
      if(isLoading){
        return <h3>Fetching weather...</h3>
      } else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return(
      <div>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
      </div>
    )
  }
}

export default Weather