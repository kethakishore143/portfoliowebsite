import React from 'react'
import { PiHandWavingFill } from "react-icons/pi";
import Navbar from '../Navbar/Navbar';
import { LiaFacebook } from "react-icons/lia";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";
import { LiaSnapchatSquare } from "react-icons/lia";

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

            <p className='info'>UI/UX Designer, FrontEnd Developer & Thinker. Based in India </p>
            <div>
                <button className='downloadcvbtn'>Download CV</button>
                <button className='getintouchbtn'>Get in touch </button>
            </div>
            </div>
            <div>
                <hr/>
            </div>
        <div>
            <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750869410/Image_iekr6w.png' alt='profilepic' className='profileimg'/>
        </div>
    </div>
    <div className='bottomcard'>
        <div className='socialicons'>
                     <LiaFacebook />
                     <TiSocialInstagram />
                     <TiSocialTwitterCircular />
                     <VscGithub />
                     <TiSocialLinkedinCircular />
                     <RiTelegramLine />
                     <LiaSnapchatSquare />
        
                  </div>
                  <div>
                    
                  </div>
                  <div>
                  <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750955109/sinhaanishkumar_outlook.com_ia0zdq.png' alt='mailid' className='mailid'/>

                  </div>
    </div>
    </div>
  )
}

export default Home