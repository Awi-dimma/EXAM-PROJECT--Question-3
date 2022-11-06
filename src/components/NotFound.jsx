import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div>
      <h1>Opps</h1>
      <h1>404 Page Not found</h1>
      <button className = "button-33">
        <Link className='text-link'to="/">Back</Link> 
      </button>
    </div>
  )
}

export default NotFound;