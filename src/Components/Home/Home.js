import React from 'react'
import { PiHandWavingFill } from "react-icons/pi";
import Navbar from '../Navbar/Navbar';

import "./Home.css"


const Home = () => {
  return (
    <div>
        <Navbar/>
        
        <div className='homecard'>
            <div>
            <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750869902/Hello_e5z80i.png' alt='hellow'/>
            <div className='imanish'>
                <h3>I'm Anish</h3>
            <PiHandWavingFill />
             </div>

            <p>UI/UX Designer, FrontEnd Developer & Thinker. Based in India </p>
            <div>
                <button>Download CV</button>
                <button>Get in touch </button>
            </div>
            </div>
        <div>
            <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750869410/Image_iekr6w.png' alt='profilepic'/>
        </div>
    </div>
    </div>
  )
}

export default Home