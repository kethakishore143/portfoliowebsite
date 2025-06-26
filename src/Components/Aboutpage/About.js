import React from 'react'

import "./About.css"
import Navbar from '../Navbar/Navbar'
import { LiaFacebook } from "react-icons/lia";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";
import { LiaSnapchatSquare } from "react-icons/lia";






const About = () => {
  return (
    <div className='about-maincard'>
      <Navbar/>
      <div className='about-card'>
      <div>
        <img src ='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750941548/Rectangle_lphhto.png' alt='hand' className='handimg'/>
      </div>
        <div>
            <h3>This is it ;) </h3>
            <p>Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11. 
He holds a bachelor degree in Computer Applications. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative. 

His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing 3D floor plan.

When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>

        </div>
        <div>
          <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750941656/Vector_3_3_kmfhcj.png' alt='yellow' className='yellowimg'/>
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
            <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750941315/Vector_4_drdfs5.png' alt='yellow' className='shapesimg'/>
          </div>
                      <hr/>

          
          <div>
            <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750941714/Vector_5_1_x3ufxd.png' alt='brown' className='shapesimg'/>
          </div>
          <div>

          
          <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750955109/sinhaanishkumar_outlook.com_ia0zdq.png' alt='mailid'/>
          <div>--</div>
          </div>
        </div>
    </div>
  )
}

export default About