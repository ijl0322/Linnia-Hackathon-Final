import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div>
      <Link to='/firstRoute'><span>first route</span></Link>
      <br></br>
      <Link to='/secondRoute'><span>second route</span></Link>
    </div>
  )
}

export default Header