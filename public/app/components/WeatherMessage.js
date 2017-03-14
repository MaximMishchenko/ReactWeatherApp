import React from 'react'

let WeatherMessage = (props) => {
  let {temp, location} = props

  return(
    <div>
      <h3 className="text-center">It's it {temp} in {location}</h3>
    </div>
  )
}

export default WeatherMessage
