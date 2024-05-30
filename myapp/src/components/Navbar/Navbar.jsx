import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='d-flex flex-row justify-content-start m-2 p-3'>

        <Link to='/' className='m-3'>Home</Link>
        <Link to='/about' className='m-3'>About</Link>
        <Link to='/contact' className='m-3'>Contact</Link>
        
    </div>
  )
}

export default Navbar