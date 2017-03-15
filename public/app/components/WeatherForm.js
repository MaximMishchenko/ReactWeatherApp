import React from 'react'

class WeatherForm extends React.Component {

  onFormSubmit(event){
    event.preventDefault()

    let location = this.refs.location.value

    if(location.length > 1){
      this.refs.location.value = ''
      this.props.onSearch(location)
    }

  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type="search" placeholder="Search weather by city" ref="location"/>
        <button className="button expanded hollow">Get weather</button>
      </form>
    )
  }
}

export default WeatherForm
