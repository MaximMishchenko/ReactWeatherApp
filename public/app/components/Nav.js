import React from 'react'
import { Link, IndexLink } from 'react-router'


let Nav = () => {
  return(
    <div>
      <IndexLink to="/">Get Weather</IndexLink>
      <Link to="/about">About</Link>
      <Link to="/examples">Examples</Link>
    </div>
  )
}

export default Nav
