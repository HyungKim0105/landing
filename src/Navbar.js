import React from 'react'
import HRK from './Assets/HRK.png'

const Navbar = () => {
  return (
    <div>
        <img src={HRK} alt="HRK" />
        <ul>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar