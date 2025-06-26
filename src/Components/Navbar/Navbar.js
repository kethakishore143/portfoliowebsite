import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from '../../App';
import "./Navbar.css";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='navcontainer'>
      <div className='navitems'>
        <img src='https://res.cloudinary.com/dyq2jhzds/image/upload/v1750941921/Group_23_ukkegn.png' alt='flower' className='flowerimg' />
        <h3 className='profilename'>ANISH KUMAR SINHA</h3>
      </div>
      <div className='navitems'>
        <Link to='/portfoliowebsite'><p>Home</p></Link>
        <Link to='/aboutpage'><p>About</p></Link>
        <p>Resume</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact</p>
        <button onClick={toggleTheme} className='theme-toggle'>
          {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;