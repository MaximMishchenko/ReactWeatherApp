import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0c7a7d50ac2c975efef02886cfb1beaf&units=metric'

export default {
  getTemp: (location) => {
    let encodedLocation = encodeURIComponent(location)
    let requestUrl = OPEN_WEATHER_MAP_URL + '&q='+ encodedLocation

    return axios.get(requestUrl).then((res) => {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp
      }
    }, (err) => {
      throw new Error(err.message)
    })
  }
}
