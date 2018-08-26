import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div>
      <Link to='/records'><span>View Records</span></Link>
      <br></br>
      <Link to='/addrecord'><span>Add Record</span></Link>
    </div>
  )
}

export default Header