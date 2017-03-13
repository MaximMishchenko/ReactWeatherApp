import React from 'react'
import { render } from 'react-dom'

class WeatherMessage extends React.Component {

  render(){
    let {temp, location} = this.props

    console.log(this.props)
    return(
      <div>
        <h3 className="text-center">It's it {temp} in {location}</h3>
      </div>
    )
  }
}

export default WeatherMessage
