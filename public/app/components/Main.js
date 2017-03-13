import React from 'react'

//components
import Nav from './Nav'

let Main = (props) => {
  return(
    <div>
      <Nav/>
      {props.children}
    </div>
  )
}

export default Main
