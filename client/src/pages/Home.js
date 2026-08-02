import React, { useState } from 'react'
import './home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../assets/docs/Hannan-Raza-CV.pdf'
// import Resume from '/Hannan Portfolio/client/src/assets/docs/Hannan_Khan.pdf';
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext';
import Fade from 'react-reveal/Fade'

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handletheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handletheme}>
          {theme === 'light' ? (<BsMoonStarsFill size={35} />) : (<BsSunFill size={35} />)}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1><Typewriter
              options={{
                strings: ['Full Stack Developer !', 'Mern Stack Developer !', 'React Native Developer !'],
                autoStart: true,
                loop: true,
              }}
            />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=7983562869' rel='noreferrer' target='_blank'> Hire ME</a>
              {/* <button className='btn btn-hire'>Hire Me</button> */}
              <a className='btn btn-cv' href={Resume} download="Hannan-Raza-CV.pdf">My Resume</a>
            </div>
          </Fade>
        </div>

      </div>
    </>
  )
}

export default Home
