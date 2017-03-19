import React from 'react'

let About = () => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a simple weather application build on React.</p>
      <p>
        Here are some of tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/" target="_blank">React</a> - This was the JavaScript library used.
        </li>
        <li>
          <a href="http://openweathermap.org/" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
}

export default About
