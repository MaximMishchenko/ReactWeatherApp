import React from 'react'
import { Link } from 'react-router'

let Examples = () => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?q=Dnepr">Dnipro, UA</Link>
        </li>
        <li>
          <Link to="/?q=London">London, UK</Link>
        </li>
      </ol>
    </div>
  )
}

export default Examples
