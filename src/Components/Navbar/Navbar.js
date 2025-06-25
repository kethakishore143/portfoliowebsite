import React from 'react'
import { TbVectorBezierCircle } from "react-icons/tb";
import { BsMoonStarsFill } from "react-icons/bs";

import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navcontainer'>
    <div className='navitems'>
    <TbVectorBezierCircle />
   <h3 className='profilename' >ANISH KUMAR SINHA</h3>
    </div>
    <div className='navitems'>
       <p>Home</p>
        <p>About</p>
        <p>Resume</p>
        <p>Skills</p>
        <p>Projects</p>
         <p>Contact</p>
         <BsMoonStarsFill />

    </div>
    </div>
  )
}

export default Navbar