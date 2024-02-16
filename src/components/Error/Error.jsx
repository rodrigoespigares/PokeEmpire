import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css';
export default function Error() {
  return (
    <div id='error'>
      <p className='error'>404</p>
      <p><span>Oops!</span> A wild <b>Snorlax</b> has blocked your path!</p>
      <Link className='link' to="/">GO BACK</Link>
    </div>
  )
}
