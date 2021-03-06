import React from 'react'
import { browserHistory } from 'react-router'

import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import ErrorModal from './ErrorModal'

import openWeatherMap from '../api/openWeatherMap'

class Weather extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isLoading: false,
      location: this.props.location,
      temp: this.props.temp,
      errorMessage: this.props.message
    }
  }

  handleSearch(location){
    let self = this

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })

    openWeatherMap.getTemp(location).then((temp) => {
      self.setState({
        location: location,
        temp: temp,
        isLoading: false,
      })
    }, (e) => {
      self.setState({
        isLoading: false,
        errorMessage: e.message
      })
    })
  }

  componentDidMount(){
    let location = this.props.location.query.location

    if(location && location.length > 1){
      this.handleSearch(location)
      browserHistory.push(`/`)
    }
  }

  componentWillReceiveProps(newProps){
    let location = newProps.location.query.location

    if(location && location.length > 1){
      this.handleSearch(location)
      browserHistory.push(`/`)
    }
  }

  render(){
    let {isLoading, temp, location, errorMessage} = this.state

    let renderMessage = () => {
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>
      } else if(temp && location){
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    let renderError = () => {
      if(typeof errorMessage === 'string'){
        return(
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch.bind(this)}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}

export default Weather
